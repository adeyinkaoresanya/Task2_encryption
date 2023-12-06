import { Router } from "express";
import { encrypt, decrypt } from "./aes-encryption.js";

const router = Router();

router.get("/encrypt", (req, res) => {

res.status(200).json({ message: "encryptedData" })
  
})

router.post("/encrypt", (req, res) => {
    const data = req.body.data

    let encryptedData = encrypt(data)
    console.log (encryptedData)
    res.status(200).json({ message: encryptedData })
  
})

router.post("/decrypt", (req, res) => {
    const data = req.body.data
    let decryptedData = decrypt(data)
    res.status(200).json({ message: decryptedData })
  
})

export default router;

  