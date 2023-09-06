import express from "express";

const router = express.Router();

// get register page
router.get("/", (req, res) => {

    const title = "🕸️🕸️🕸️";

    const header = "sign up";

    res.render("register", {
        title,
        header
    });

});

// Export the router
export { router };