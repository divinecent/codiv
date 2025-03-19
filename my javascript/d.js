document.addEventListener("DOMContentLoaded", function () {
    const homeBtn = document.getElementById("home-btn");
    const aboutBtn = document.getElementById("about-btn");
    const contactBtn = document.getElementById("contact-btn");
    const homeSubmenu = document.getElementById("home-submenu");
    const aboutSubmenu = document.getElementById("about-submenu");
    const addHomeBtn = document.getElementById("add-home");
    const manageHomeBtn = document.getElementById("manage-home");
    const formsSection = document.getElementById("forms-section");
    const tablesSection = document.getElementById("tables-section");

    // Toggle Submenus
    homeBtn.addEventListener("click", () => {
        homeSubmenu.style.display = homeSubmenu.style.display === "block" ? "none" : "block";
        aboutSubmenu.style.display = "none";
    });

    aboutBtn.addEventListener("click", () => {
        aboutSubmenu.style.display = aboutSubmenu.style.display === "block" ? "none" : "block";
        homeSubmenu.style.display = "none";
    });
    

    contactBtn.addEventListener("click", () => {
        aboutSubmenu.style.display = "none";
        homeSubmenu.style.display = "none";
    });

    // Add functionality
    addHomeBtn.addEventListener("click", () => {
        formsSection.classList.remove("d-none");
        tablesSection.classList.add("d-none");
        formsSection.innerHTML = generateForms();
    });

    // Manage functionality
    manageHomeBtn.addEventListener("click", () => {
        formsSection.classList.add("d-none");
        tablesSection.classList.remove("d-none");
        tablesSection.innerHTML = generateTables();
    });

    function generateForms() {
        let forms = "";
        for (let i = 1; i <= 7; i++) {
            forms += `
                <form class="border p-3 mb-3">
                    <h5>Form ${i}</h5>
                    <div class="mb-3">
                        <label class="form-label">Upload Image</label>
                        <input type="file" class="form-control">
                    </div>
                    <div class="mb-3">
                        <label class="form-label">Heading</label>
                        <input type="text" class="form-control">
                    </div>
                    <div class="mb-3">
                        <label class="form-label">Paragraph</label>
                        <textarea class="form-control"></textarea>
                    </div>
                    <button type="submit" class="btn btn-primary upload-btn">Upload</button>
                </form>
            `;
        }
        return forms;
    }

    function generateTables() {
        return `
            <div class="tables-section">
                <h5>Hero and Landing Section</h5>
                <table class="table">
                    <thead>
                        <tr>
                            <th>Serial Number</th>
                            <th>Image</th>
                            <th>Heading</th>
                            <th>Paragraph</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td>1</td>
                            <td>Sample</td>
                            <td>Sample</td>
                            <td>Sample</td>
                            <td><button class="btn btn-sm btn-success">View</button>
                            <button class="btn btn-sm btn-warning">Edit</button>
                            <button class="btn btn-sm btn-danger">Update</button></td>
                        </tr>
                    </tbody>
                </table>

                <h5>Gallery Section</h5>
                <table class="table">
                    <thead>
                        <tr>
                            <th>Serial Number</th>
                            <th>Image</th>
                            <th>Description</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td>1</td>
                            <td>Sample</td>
                            <td>Sample Description</td>
                            <td><button class="btn btn-sm btn-success">View</button>
                            <button class="btn btn-sm btn-warning">Edit</button>
                            <button class="btn btn-sm btn-danger">Update</button></td>
                        </tr>
                    </tbody>
                </table>
            </div>
        `;
    }
});


// document.addEventListener("DOMContentLoaded", function () {
//     // Get references to the buttons and submenus
//     const aboutBtn = document.getElementById("about-btn");
//     const projectsBtn = document.getElementById("projects-btn");
//     const productsBtn = document.getElementById("products-btn");
//     const biographyBtn = document.getElementById("biography-btn");

//     const aboutSubmenu = document.getElementById("about-submenu");
//     const projectsSubmenu = document.getElementById("projects-submenu");
//     const productsSubmenu = document.getElementById("products-submenu");
//     const biographySubmenu = document.getElementById("biography-submenu");

//     // Function to close all submenus
//     function closeAllSubmenus() {
//         aboutSubmenu.style.display = "none";
//         projectsSubmenu.style.display = "none";
//         productsSubmenu.style.display = "none";
//         biographySubmenu.style.display = "none";
//     }

//     // Function to toggle visibility of submenus
//     function toggleSubmenu(submenu) {
//         // Check if the submenu is already visible
//         if (submenu.style.display === "block") {
//             submenu.style.display = "none"; // If it's visible, hide it
//         } else {
//             closeAllSubmenus(); // Close all submenus
//             submenu.style.display = "block"; // Show the clicked submenu
//         }
//     }

//     // Toggle the "About" submenu when clicked
//     aboutBtn.addEventListener("click", function() {
//         toggleSubmenu(aboutSubmenu);
//     });

//     // Toggle the "Our Projects" submenu when clicked
//     projectsBtn.addEventListener("click", function() {
//         toggleSubmenu(projectsSubmenu);
//     });

//     // Toggle the "Our Products" submenu when clicked
//     productsBtn.addEventListener("click", function() {
//         toggleSubmenu(productsSubmenu);
//     });

//     // Toggle the "Our Biography" submenu when clicked
//     biographyBtn.addEventListener("click", function() {
//         toggleSubmenu(biographySubmenu);
//     });

//     // Optional: Close all submenus when clicking outside
//     document.addEventListener("click", function(event) {
//         if (!event.target.closest(".nav-item")) {
//             closeAllSubmenus();
//         }
//     });
// });
