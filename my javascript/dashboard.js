// Ensure only one dropdown is open at a time in the sidebar
document.querySelectorAll('#sidebar .collapse').forEach(function (dropdown) {
    dropdown.addEventListener('show.bs.collapse', function () {
      document.querySelectorAll('#sidebar .collapse').forEach(function (otherDropdown) {
        if (otherDropdown !== dropdown) {
          otherDropdown.classList.remove('show');
        }
      });
    });
  });


// home add 

 // JavaScript to dynamically add forms when "Add" is clicked
 document.getElementById('addHome').addEventListener('click', function () {
  const dynamicContent = document.getElementById('dynamic-content');
  dynamicContent.innerHTML = `
    <h2 class="my-4">Hero Section</h2>
    <!-- Three forms for image, heading, and paragraph -->
    <form class="mb-4">
      <div class="mb-3">
        <label for="image1" class="form-label">Upload Image</label>
        <input type="file" class="form-control" id="image1">
      </div>
      <div class="mb-3">
        <label for="heading1" class="form-label">Heading</label>
        <input type="text" class="form-control" id="heading1" placeholder="Enter heading">
      </div>
      <div class="mb-3">
        <label for="paragraph1" class="form-label">Paragraph</label>
        <textarea class="form-control" id="paragraph1" rows="3" placeholder="Enter paragraph"></textarea>
      </div>
      <button type="submit" class="btn btn-primary">Submit</button>
    </form>

    <h2 class="my-4">First Landing Section</h2>
    <form class="mb-4">
      <div class="mb-3">
        <label for="image1" class="form-label">Upload Image</label>
        <input type="file" class="form-control" id="image1">
      </div>
      <div class="mb-3">
        <label for="heading1" class="form-label">Heading</label>
        <input type="text" class="form-control" id="heading1" placeholder="Enter heading">
      </div>
      <div class="mb-3">
        <label for="paragraph1" class="form-label">Paragraph</label>
        <textarea class="form-control" id="paragraph1" rows="3" placeholder="Enter paragraph"></textarea>
      </div>
      <button type="submit" class="btn btn-primary">Submit</button>
    </form>

    <h2 class="my-4">Second Landing Section</h2>
    <form class="mb-4">
      <div class="mb-3">
        <label for="image1" class="form-label">Upload Image</label>
        <input type="file" class="form-control" id="image1">
      </div>
      <div class="mb-3">
        <label for="heading1" class="form-label">Heading</label>
        <input type="text" class="form-control" id="heading1" placeholder="Enter heading">
      </div>
      <div class="mb-3">
        <label for="paragraph1" class="form-label">Paragraph</label>
        <textarea class="form-control" id="paragraph1" rows="3" placeholder="Enter paragraph"></textarea>
      </div>
      <button type="submit" class="btn btn-primary">Submit</button>
    </form>



    <!-- Four forms for image and image description -->
    <h2 class="my-4">Galary Section</h2
    <form class="mb-4">
     <h2 class="my-4">Galary One</h2>
  
    <div class="mb-3">
        <label for="imageDesc1" class="form-label">Upload Image</label>
        <input type="file" class="form-control" id="imageDesc1">
      </div>
      <div class="mb-3">
        <label for="desc1" class="form-label">Image Description</label>
        <textarea class="form-control" id="desc1" rows="2" placeholder="Enter description"></textarea>
      </div>
      <button type="submit" class="btn btn-primary">Submit</button>

      
    </form>

     <form class="mb-4">
     <h2 class="my-4">Galary Two</h2
  
    <div class="mb-3">
        <label for="imageDesc1" class="form-label">Upload Image</label>
        <input type="file" class="form-control" id="imageDesc1">
      </div>
      <div class="mb-3">
        <label for="desc1" class="form-label">Image Description</label>
        <textarea class="form-control" id="desc1" rows="2" placeholder="Enter description"></textarea>
      </div>
      <button type="submit" class="btn btn-primary">Submit</button>

      
    </form>

     <form class="mb-4">
     <h2 class="my-4">Galary Three</h2
  
    <div class="mb-3">
        <label for="imageDesc1" class="form-label">Upload Image</label>
        <input type="file" class="form-control" id="imageDesc1">
      </div>
      <div class="mb-3">
        <label for="desc1" class="form-label">Image Description</label>
        <textarea class="form-control" id="desc1" rows="2" placeholder="Enter description"></textarea>
      </div>
      <button type="submit" class="btn btn-primary">Submit</button>

      
    </form>

     <form class="mb-4">
     <h2 class="my-4">Galary Four</h2

    <div class="mb-3">
        <label for="imageDesc1" class="form-label">Upload Image</label>
        <input type="file" class="form-control" id="imageDesc1">
      </div>
      <div class="mb-3">
        <label for="desc1" class="form-label">Image Description</label>
        <textarea class="form-control" id="desc1" rows="2" placeholder="Enter description"></textarea>
      </div>
      <button type="submit" class="btn btn-primary">Submit</button>

      
    </form>
  `;
});

// manage under home


  // JavaScript to dynamically add tables when "Manage" is clicked
  document.getElementById('manageHome').addEventListener('click', function () {
    const dynamicContent = document.getElementById('dynamic-content');
    dynamicContent.innerHTML = `
      <h2 class="my-4">Hero Section</h2>
      <table class="table table-bordered table-striped">
        <thead class="table-light">
          <tr>
            <th>Serial Number</th>
            <th>Image</th>
            <th>Heading</th>
            <th>Paragraph</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>1</td>
            <td>Sample</td>
            <td>Sample</td>
            <td>Sample</td>
            <td>
              <button class="btn btn-success btn-sm">View</button>
              <button class="btn btn-warning btn-sm">Edit</button>
              <button class="btn btn-danger btn-sm">Update</button>
            </td>
          </tr>
        </tbody>
      </table>

      <h2 class="my-4">Landing Section</h2>
      <table class="table table-bordered table-striped">
        <thead class="table-light">
          <tr>
            <th>Serial Number</th>
            <th>Image</th>
            <th>Heading</th>
            <th>Paragraph</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>1</td>
            <td>Sample</td>
            <td>Sample</td>
            <td>Sample</td>
            <td>
              <button class="btn btn-success btn-sm">View</button>
              <button class="btn btn-warning btn-sm">Edit</button>
              <button class="btn btn-danger btn-sm">Update</button>
            </td>
          </tr>
        </tbody>

        <tbody>
          <tr>
            <td>2</td>
            <td>Sample</td>
            <td>Sample</td>
            <td>Sample</td>
            <td>
              <button class="btn btn-success btn-sm">View</button>
              <button class="btn btn-warning btn-sm">Edit</button>
              <button class="btn btn-danger btn-sm">Update</button>
            </td>
          </tr>
        </tbody>

      </table>

      <h2 class="my-4">Gallery Section</h2>
      <table class="table table-bordered table-striped">
        <thead class="table-light">
          <tr>
            <th>Serial Number</th>
            <th>Image</th>
            <th>Description</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>1</td>
            <td>Sample</td>
            <td>Sample Description</td>
            <td>
              <button class="btn btn-success btn-sm">View</button>
              <button class="btn btn-warning btn-sm">Edit</button>
              <button class="btn btn-danger btn-sm">Update</button>
            </td>
          </tr>
        </tbody>

        <tbody>
          <tr>
            <td>1</td>
            <td>Sample</td>
            <td>Sample Description</td>
            <td>
              <button class="btn btn-success btn-sm">View</button>
              <button class="btn btn-warning btn-sm">Edit</button>
              <button class="btn btn-danger btn-sm">Update</button>
            </td>
          </tr>
        </tbody>

        <tbody>
          <tr>
            <td>1</td>
            <td>Sample</td>
            <td>Sample Description</td>
            <td>
              <button class="btn btn-success btn-sm">View</button>
              <button class="btn btn-warning btn-sm">Edit</button>
              <button class="btn btn-danger btn-sm">Update</button>
            </td>
          </tr>
        </tbody>

        <tbody>
          <tr>
            <td>1</td>
            <td>Sample</td>
            <td>Sample Description</td>
            <td>
              <button class="btn btn-success btn-sm">View</button>
              <button class="btn btn-warning btn-sm">Edit</button>
              <button class="btn btn-danger btn-sm">Update</button>
            </td>
          </tr>
        </tbody>
      </table>
    `;
  });


// projects

  document.getElementById('add-our-projects').addEventListener('click', function () {
    const dynamicContent = document.getElementById('dynamic-content');
    dynamicContent.innerHTML = `

     <h2 class="my-4">First project </h2>
    <!-- Three forms for image, heading, and paragraph -->
    <form class="mb-4">
      <div class="mb-3">
        <label for="image1" class="form-label">Upload Image</label>
        <input type="file" class="form-control" id="image1">
      </div>
      <div class="mb-3">
        <label for="heading1" class="form-label">Heading</label>
        <input type="text" class="form-control" id="heading1" placeholder="Enter heading">
      </div>
      <div class="mb-3">
        <label for="paragraph1" class="form-label">Paragraph</label>
        <textarea class="form-control" id="paragraph1" rows="3" placeholder="Enter paragraph"></textarea>
      </div>
      <button type="submit" class="btn btn-primary">Submit</button>
    </form>

     <h2 class="my-4">Second project </h2>
    <!-- Three forms for image, heading, and paragraph -->
    <form class="mb-4">
      <div class="mb-3">
        <label for="image1" class="form-label">Upload Image</label>
        <input type="file" class="form-control" id="image1">
      </div>
      <div class="mb-3">
        <label for="heading1" class="form-label">Heading</label>
        <input type="text" class="form-control" id="heading1" placeholder="Enter heading">
      </div>
      <div class="mb-3">
        <label for="paragraph1" class="form-label">Paragraph</label>
        <textarea class="form-control" id="paragraph1" rows="3" placeholder="Enter paragraph"></textarea>
      </div>
      <button type="submit" class="btn btn-primary">Submit</button>
    </form>

     <h2 class="my-4">Third project </h2>
    <!-- Three forms for image, heading, and paragraph -->
    <form class="mb-4">
      <div class="mb-3">
        <label for="image1" class="form-label">Upload Image</label>
        <input type="file" class="form-control" id="image1">
      </div>
      <div class="mb-3">
        <label for="heading1" class="form-label">Heading</label>
        <input type="text" class="form-control" id="heading1" placeholder="Enter heading">
      </div>
      <div class="mb-3">
        <label for="paragraph1" class="form-label">Paragraph</label>
        <textarea class="form-control" id="paragraph1" rows="3" placeholder="Enter paragraph"></textarea>
      </div>
      <button type="submit" class="btn btn-primary">Submit</button>
    </form>

    `;
  });

  // manage under projects


  // JavaScript to dynamically add tables when "Manage" is clicked
  document.getElementById('manage-projects').addEventListener('click', function () {
    const dynamicContent = document.getElementById('dynamic-content');
    dynamicContent.innerHTML = `
       <h2 class="my-4">Manage Projects</h2>
      <table class="table table-bordered table-striped">
        <thead class="table-light">
          <tr>
            <th>Serial Number</th>
            <th>Image</th>
            <th>Description</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>1</td>
            <td>Sample</td>
            <td>Sample Description</td>
            <td>
              <button class="btn btn-success btn-sm">View</button>
              <button class="btn btn-warning btn-sm">Edit</button>
              <button class="btn btn-danger btn-sm">Update</button>
            </td>
          </tr>
        </tbody>

        <tbody>
          <tr>
            <td>2</td>
            <td>Sample</td>
            <td>Sample Description</td>
            <td>
              <button class="btn btn-success btn-sm">View</button>
              <button class="btn btn-warning btn-sm">Edit</button>
              <button class="btn btn-danger btn-sm">Update</button>
            </td>
          </tr>
        </tbody>

        <tbody>
          <tr>
            <td>3</td>
            <td>Sample</td>
            <td>Sample Description</td>
            <td>
              <button class="btn btn-success btn-sm">View</button>
              <button class="btn btn-warning btn-sm">Edit</button>
              <button class="btn btn-danger btn-sm">Update</button>
            </td>
          </tr>
        </tbody>
      </table>
    `;
  });


// products

  document.getElementById('add-our-products').addEventListener('click', function () {
    const dynamicContent = document.getElementById('dynamic-content');
    dynamicContent.innerHTML = `

     <h2 class="my-4">First product </h2>
    <!-- Three forms for image, heading, and paragraph -->
    <form class="mb-4">
      <div class="mb-3">
        <label for="image1" class="form-label">Upload Image</label>
        <input type="file" class="form-control" id="image1">
      </div>
      <div class="mb-3">
        <label for="heading1" class="form-label">Heading</label>
        <input type="text" class="form-control" id="heading1" placeholder="Enter heading">
      </div>
      <div class="mb-3">
        <label for="paragraph1" class="form-label">Paragraph</label>
        <textarea class="form-control" id="paragraph1" rows="3" placeholder="Enter paragraph"></textarea>
      </div>
      <button type="submit" class="btn btn-primary">Submit</button>
    </form>

     <h2 class="my-4">Second product </h2>
    <!-- Three forms for image, heading, and paragraph -->
    <form class="mb-4">
      <div class="mb-3">
        <label for="image1" class="form-label">Upload Image</label>
        <input type="file" class="form-control" id="image1">
      </div>
      <div class="mb-3">
        <label for="heading1" class="form-label">Heading</label>
        <input type="text" class="form-control" id="heading1" placeholder="Enter heading">
      </div>
      <div class="mb-3">
        <label for="paragraph1" class="form-label">Paragraph</label>
        <textarea class="form-control" id="paragraph1" rows="3" placeholder="Enter paragraph"></textarea>
      </div>
      <button type="submit" class="btn btn-primary">Submit</button>
    </form>

     <h2 class="my-4">Third product </h2>
    <!-- Three forms for image, heading, and paragraph -->
    <form class="mb-4">
      <div class="mb-3">
        <label for="image1" class="form-label">Upload Image</label>
        <input type="file" class="form-control" id="image1">
      </div>
      <div class="mb-3">
        <label for="heading1" class="form-label">Heading</label>
        <input type="text" class="form-control" id="heading1" placeholder="Enter heading">
      </div>
      <div class="mb-3">
        <label for="paragraph1" class="form-label">Paragraph</label>
        <textarea class="form-control" id="paragraph1" rows="3" placeholder="Enter paragraph"></textarea>
      </div>
      <button type="submit" class="btn btn-primary">Submit</button>
    </form>

    `;
  });

  // manage under productss


  // JavaScript to dynamically add tables when "Manage" is clicked
  document.getElementById('manage-products').addEventListener('click', function () {
    const dynamicContent = document.getElementById('dynamic-content');
    dynamicContent.innerHTML = `
       <h2 class="my-4">Manage Products</h2>
      <table class="table table-bordered table-striped">
        <thead class="table-light">
          <tr>
            <th>Serial Number</th>
            <th>Image</th>
            <th>Description</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>1</td>
            <td>Sample</td>
            <td>Sample Description</td>
            <td>
              <button class="btn btn-success btn-sm">View</button>
              <button class="btn btn-warning btn-sm">Edit</button>
              <button class="btn btn-danger btn-sm">Update</button>
            </td>
          </tr>
        </tbody>

        <tbody>
          <tr>
            <td>2</td>
            <td>Sample</td>
            <td>Sample Description</td>
            <td>
              <button class="btn btn-success btn-sm">View</button>
              <button class="btn btn-warning btn-sm">Edit</button>
              <button class="btn btn-danger btn-sm">Update</button>
            </td>
          </tr>
        </tbody>

        <tbody>
          <tr>
            <td>3</td>
            <td>Sample</td>
            <td>Sample Description</td>
            <td>
              <button class="btn btn-success btn-sm">View</button>
              <button class="btn btn-warning btn-sm">Edit</button>
              <button class="btn btn-danger btn-sm">Update</button>
            </td>
          </tr>
        </tbody>
      </table>
    `;
  });


  // biography

  document.getElementById('add-biography').addEventListener('click', function () {
    const dynamicContent = document.getElementById('dynamic-content');
    dynamicContent.innerHTML = `

     <h2 class="my-4">Our Biography </h2>
    <!-- Three forms for image, heading, and paragraph -->
    <form class="mb-4">
      <div class="mb-3">
        <label for="image1" class="form-label">Upload Image</label>
        <input type="file" class="form-control" id="image1">
      </div>
      <div class="mb-3">
        <label for="heading1" class="form-label">Heading</label>
        <input type="text" class="form-control" id="heading1" placeholder="Enter heading">
      </div>
      <div class="mb-3">
        <label for="paragraph1" class="form-label">Paragraph</label>
        <textarea class="form-control" id="paragraph1" rows="3" placeholder="Enter paragraph"></textarea>
      </div>
      <button type="submit" class="btn btn-primary">Submit</button>
    </form>

     `;
   });


     // manage under productss


  // JavaScript to dynamically add tables when "Manage" is clicked
  document.getElementById('manage-biography').addEventListener('click', function () {
    const dynamicContent = document.getElementById('dynamic-content');
    dynamicContent.innerHTML = `
       <h2 class="my-4">Manage Biography</h2>
      <table class="table table-bordered table-striped">
        <thead class="table-light">
          <tr>
            <th>Serial Number</th>
            <th>Image</th>
            <th>Description</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>1</td>
            <td>Sample</td>
            <td>Sample Description</td>
            <td>
              <button class="btn btn-success btn-sm">View</button>
              <button class="btn btn-warning btn-sm">Edit</button>
              <button class="btn btn-danger btn-sm">Update</button>
            </td>
          </tr>
        </tbody>
        `;
      });
      



      // vision

      document.getElementById('add-vision').addEventListener('click', function () {
        const dynamicContent = document.getElementById('dynamic-content');
        dynamicContent.innerHTML = `
       <!-- Four forms for image and image description -->
        <h2 class="my-4">Galary Section</h2
        <form class="mb-4">
        <h2 class="my-4">Galary One</h2>
  
        <div class="mb-3">
          <label for="imageDesc1" class="form-label">Upload Image</label>
          <input type="file" class="form-control" id="imageDesc1">
        </div>
        <div class="mb-3">
          <label for="desc1" class="form-label">Image Description</label>
          <textarea class="form-control" id="desc1" rows="2" placeholder="Enter description"></textarea>
        </div>
        <button type="submit" class="btn btn-primary">Submit</button>

      
    </form>

     <form class="mb-4">
     <h2 class="my-4">Galary Two</h2
  
    <div class="mb-3">
        <label for="imageDesc1" class="form-label">Upload Image</label>
        <input type="file" class="form-control" id="imageDesc1">
      </div>
      <div class="mb-3">
        <label for="desc1" class="form-label">Image Description</label>
        <textarea class="form-control" id="desc1" rows="2" placeholder="Enter description"></textarea>
      </div>
      <button type="submit" class="btn btn-primary">Submit</button>

      
    </form>

     <form class="mb-4">
     <h2 class="my-4">Galary Three</h2
  
    <div class="mb-3">
        <label for="imageDesc1" class="form-label">Upload Image</label>
        <input type="file" class="form-control" id="imageDesc1">
      </div>
      <div class="mb-3">
        <label for="desc1" class="form-label">Image Description</label>
        <textarea class="form-control" id="desc1" rows="2" placeholder="Enter description"></textarea>
      </div>
      <button type="submit" class="btn btn-primary">Submit</button>

      
    </form>

     <form class="mb-4">
     <h2 class="my-4">Galary Four</h2

    <div class="mb-3">
        <label for="imageDesc1" class="form-label">Upload Image</label>
        <input type="file" class="form-control" id="imageDesc1">
      </div>
      <div class="mb-3">
        <label for="desc1" class="form-label">Image Description</label>
        <textarea class="form-control" id="desc1" rows="2" placeholder="Enter description"></textarea>
      </div>
      <button type="submit" class="btn btn-primary">Submit</button>
    </form>
      `;
   });