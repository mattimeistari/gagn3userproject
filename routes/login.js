import express from "express";

const router = express.Router();

// get register page
router.get("/", (req, res) => {

    const title = "😈😈😈";
    
    const header = "log in"
    res.render("login", {
        title,
        header
    });

});

// Export the router
export { router };