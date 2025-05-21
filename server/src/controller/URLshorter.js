import {nanoid} from "nanoid";
import URLs from "../models/URlschema.js";


export const getURls = async(req,res) => {

  const urls = await URLs.find()
  return res.status(200).json({urls})
};

export const getLongURLsByShortId = async(req,res) => {
  const {shortUrlId} = req.params;

  const urls = await URLs.find({
    shortenURL: shortUrlId
  })
  return res.status(200).json({urls})
};

export const createShortenURLs = async (req, res) => {
  const { longUrl } = req.body;
  const uniqueId = nanoid(5);

  const shortUrl = `${req.protocol}://localhost:${process.env.PORT}/${uniqueId}`;

  const saveShortenURl = await URLs.create({
    longURL: longUrl,
    shortenURL: shortUrl,
  });

  return res.status(200).json({ message: "url shortened", saveShortenURl });
};
