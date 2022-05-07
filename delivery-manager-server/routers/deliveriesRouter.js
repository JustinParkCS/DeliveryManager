/**
 * Module dependencies
 */
import express from "express";
import fs from "fs";
import path from "path";

/**
 * Router for deliveries
 */
const deliveriesRouter = express.Router();

/**
 * Endpoint: Get all deliveries
 */
deliveriesRouter.route("/").get(async (req, res, next) => {
  try {
    fs.readFile(
      path.join(process.cwd(), "/data/deliveries.json"),
      "utf8",
      (err, data) => {
        if (err) {
          // if error reading file, return error
          return res.status(500).send(err);
        } else {
          // send data.features to client
          return res.status(200).send(JSON.parse(data).features);
        }
      }
    );
  } catch (err) {
    return res.status(400).send(err);
  }
});

/**
 * Endpoint: Modify notes and/or delivered values within documents
 * Parameters:
 *      - id: id value of delivery
 *      - notes: request body, if used, modifies the json data value corresponding the the id
 *      - delivered: request body, if used, modifies the json data value corresponding the the id
 */
deliveriesRouter.route("/:id").put(async (req, res, next) => {
  try {
    // updated data variable
    let updatedData = {};
    fs.readFile(
      path.join(process.cwd(), "/data/deliveries.json"),
      "utf8",
      (err, data) => {
        if (err) {
          return res.status(500).send(err);
        } else {
          updatedData = JSON.parse(data);
          if (
            updatedData.features.find(
              (delivery) => delivery.properties.id === req.params.id
            )
          ) {
            // update delivery's properties.notes and properties.delivered only if they are in the request body
            if (req.body.notes !== undefined) {
              updatedData.features.find(
                (delivery) => delivery.properties.id === req.params.id
              ).properties.notes = req.body.notes;
            }
            if (req.body.delivered !== undefined) {
              updatedData.features.find(
                (delivery) => delivery.properties.id === req.params.id
              ).properties.delivered = req.body.delivered;
            }
            // write updated data to file
            try {
              fs.writeFile(
                path.join(process.cwd(), "/data/deliveries.json"),
                JSON.stringify(updatedData),
                (err) => {
                  if (err) {
                    return res.status(500).send(err);
                  } else {
                    return res.status(200).send(updatedData);
                  }
                }
              );
            } catch (err) {
              return res.status(500).send(err);
            }
          } else {
            // if delivery not found, return 404 error
            return res.status(404).send("Delivery not found");
          }
        }
      }
    );
  } catch (err) {
    return res.status(400).send(err);
  }
});

export default deliveriesRouter;
