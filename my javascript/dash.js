document.addEventListener("DOMContentLoaded", () => {
    console.log("Dashboard loaded!");
  });
  
  // Sidebar toggle
  function toggleMenu(section) {
    const menus = ["home-menu", "about-menu"];
    menus.forEach(menu => {
      document.getElementById(menu).style.display = "none";
    });
  
    const currentMenu = document.getElementById(`${section}-menu`);
    if (currentMenu) {
      currentMenu.style.display = "block";
    }
  }
  
  // Show Add Form
  function showAddForm() {
    const mainContent = document.getElementById("main-content");
    mainContent.innerHTML = `
      <h2>Add Content</h2>
      <form>
        <div class="mb-3">
          <label for="upload-image" class="form-label">Upload Image</label>
          <input type="file" class="form-control" id="upload-image">
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
  
  // Show Manage Content
  function showManage() {
    const mainContent = document.getElementById("main-content");
    mainContent.innerHTML = `
      <h2>Manage Content</h2>
      <h3>Hero and Landing Section</h3>
      <table>
        <tr>
          <th>Serial Number</th>
          <th>Image</th>
          <th>Heading</th>
          <th>Paragraph</th>
          <th>Actions</th>
        </tr>
        <tr>
          <td>1</td>
          <td>Image1.jpg</td>
          <td>Heading1</td>
          <td>Paragraph1</td>
          <td>
            <button class="btn btn-success">View</button>
            <button class="btn btn-warning">Edit</button>
            <button class="btn btn-danger">Delete</button>
          </td>
        </tr>
      </table>
  
      <h3>Gallery</h3>
      <table>
        <tr>
          <th>Serial Number</th>
          <th>Image</th>
          <th>Description</th>
          <th>Actions</th>
        </tr>
        <tr>
          <td>1</td>
          <td>Image1.jpg</td>
          <td>Description1</td>
          <td>
            <button class="btn btn-success">View</button>
            <button class="btn btn-warning">Edit</button>
            <button class="btn btn-danger">Delete</button>
          </td>
        </tr>
      </table>
    `;
  }
  