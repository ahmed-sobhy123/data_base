const express = require('express')
const app = express()
const port = 3000

app.get('/', (req, res) => {
    res.sendFile("/views/home.html",{root: __dirname})//هنا كتبتله بتاع الرووت ده عشان يخلي مسار الملف الموجود هنا هو الرووت بدل ما اضطر اكتبله مسار الملف كامل من اول الدي
})

app.listen(port, () => {
    console.log(`http://localhost:${port}/`)
})