document.addEventListener("DOMContentLoaded", () => {
    console.log("Dashboard loaded!");
  });
  
  function loadForm(section) {
    const mainContent = document.getElementById("mainContent");
    if (section === "homeAdd") {
      mainContent.innerHTML = `
        <h4 class="text-primary">Add New Content</h4>
        <form>
          <div class="mb-3">
            <label for="uploadImage" class="form-label">Upload Image</label>
            <input type="file" class="form-control" id="uploadImage">
          </div>
          <div class="mb-3">
            <label for="heading" class="form-label">Heading</label>
            <input type="text" class="form-control" id="heading">
          </div>
          <div class="mb-3">
            <label for="paragraph" class="form-label">Paragraph</label>
            <textarea class="form-control" id="paragraph" rows="3"></textarea>
          </div>
          <button type="submit" class="btn btn-primary">Upload</button>
        </form>
      `;
    }
  }
  
  function loadTable(section) {
    const mainContent = document.getElementById("mainContent");
    if (section === "homeManage") {
      mainContent.innerHTML = `
        <h4 class="text-primary">Manage Content</h4>
        <table class="table">
          <thead>
            <tr>
              <th>Serial No</th>
              <th>Image</th>
              <th>Heading</th>
              <th>Paragraph</th>
              <th>Actions</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>1</td>
              <td><img src="#" alt="Image" width="50"></td>
              <td>Example Heading</td>
              <td>Example Paragraph</td>
              <td>
                <button class="btn btn-sm btn-primary">View</button>
                <button class="btn btn-sm btn-warning">Edit</button>
                <button class="btn btn-sm btn-success">Update</button>
              </td>
            </tr>
          </tbody>
        </table>
      `;
    }
  }
  
  document.addEventListener("DOMContentLoaded", () => {
    // Sidebar toggle logic for one section at a time
    const sidebarLinks = document.querySelectorAll(".nav-link[data-bs-toggle='collapse']");
    sidebarLinks.forEach(link => {
      link.addEventListener("click", () => {
        sidebarLinks.forEach(item => {
          if (item !== link && item.getAttribute("aria-expanded") === "true") {
            const target = document.querySelector(item.getAttribute("href"));
            new bootstrap.Collapse(target, { toggle: false }).hide();
          }
        });
      });
    });
  
    // Add functionality
    const addEventHandlers = (id, content) => {
      document.getElementById(id)?.addEventListener("click", () => {
        document.getElementById("dynamic-content").innerHTML = content;
      });
    };
  
    // Add forms
    const formTemplate = (num, label) => `
      <div class="mb-4">
        <form>
          <div class="mb-3">
            <label class="form-label">${label} Image</label>
            <input type="file" class="form-control">
          </div>
          <div class="mb-3">
            <label class="form-label">${label} Heading</label>
            <input type="text" class="form-control">
          </div>
          <div class="mb-3">
            <label class="form-label">${label} Paragraph</label>
            <textarea class="form-control"></textarea>
          </div>
          <button class="btn btn-primary float-end">Upload</button>
        </form>
      </div>`;
  
    addEventHandlers("homeAdd", Array.from({ length: 7 }, (_, i) => formTemplate(i + 1, `Form ${i + 1}`)).join(""));
  
    // Manage tables
    const manageContent = `
      <h3>Hero and Landing Section</h3>
      <table class="table table-bordered">
        <thead>
          <tr>
            <th>Serial Number</th>
            <th>Image</th>
            <th>Heading</th>
            <th>Paragraph</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          ${Array.from({ length: 4 }).map((_, i) => `
            <tr>
              <td>${i + 1}</td>
              <td><img src="placeholder.jpg" alt="Image" width="50"></td>
              <td>Sample Heading</td>
              <td>Sample Paragraph</td>
              <td>
                <button class="btn btn-sm btn-info">View</button>
                <button class="btn btn-sm btn-warning">Edit</button>
                <button class="btn btn-sm btn-success">Update</button>
              </td>
            </tr>`).join("")}
        </tbody>
      </table>
      <h3>Gallery</h3>
      <table class="table table-bordered">
        <thead>
          <tr>
            <th>Serial Number</th>
            <th>Image</th>
            <th>Image Description</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          ${Array.from({ length: 4 }).map((_, i) => `
            <tr>
              <td>${i + 1}</td>
              <td><img src="placeholder.jpg" alt="Image" width="50"></td>
              <td>Sample Description</td>
              <td>
                <button class="btn btn-sm btn-info">View</button>
                <button class="btn btn-sm btn-warning">Edit</button>
                <button class="btn btn-sm btn-success">Update</button>
              </td>
            </tr>`).join("")}
        </tbody>
      </table>`;
  
    addEventHandlers("homeManage", manageContent);
  });
  