# REST API with Node.js and MongoDB

This project is a REST API built using Node.js and MongoDB. It handles the creation and retrieval of posts, with support for image uploads and tag associations.

## Features

1. **Post Model:**

    - Fields: `title`, `description`, `image`, `tags`
    - Supports attaching multiple tags to a post.

2. **Tag Model:**

    - Used to associate tags with posts.

3. **Endpoints:**

    - **Get All Posts:**

        - **Sorting and Pagination:**
            - Supports sorting and paginating the data.
        - **Keyword Filter:**
            - Filters posts by a keyword in the `title` or `description`.
        - **Tag Filter:**
            - Retrieves posts associated with a specific tag.
        - **Error Handling:**
            - Returns a `BAD_REQUEST` response for any additional parameters beyond the specified options.

    - **Create Post:**
        - **Image Upload:**
            - Supports uploading images either in base64 format to MongoDB or to cloud services (AWS S3).
        - **Tag Validation:**
            - Validates that tags exist before associating them with a post.

4. **Deployment:**

    - Solution can be deployed to production.

5. **Code Quality:**

    - Clean and maintainable code structure.

6. **API Documentation:**
    - All APIs are well-documented with examples in a Postman collection.

## Setup Instructions

1. **Clone the Repository:**

    ```bash
    git clone https://github.com/srikanthg199/node-task
    cd node-task
    ```

2. **Install Dependencies:**

    ```bash
    npm install
    ```

3. **Environment Variables:**
   Create a `.env` file in the root directory and add the following:

    ```env
    MONGO_URI=your_mongodb_connection_string
    AWS_ACCESS_KEY_ID=your_aws_access_key
    AWS_SECRET_ACCESS_KEY=your_aws_secret_key
    AWS_S3_BUCKET_NAME=your_s3_bucket_name
    ```

4. **Run the Server:**

    ```bash
    npm start
    ```

    The server will run on `http://localhost:3000`.

## API Endpoints

### 1. **Get All Posts**

-   **URL:** `/api/posts`
-   **Method:** `GET`
-   **Query Parameters:**
    -   `page`: Page number for pagination.
    -   `limit`: Number of posts per page.
    -   `sort`: Field to sort by.
    -   `keyword`: Keyword to filter posts by `title` or `description`.
    -   `tag`: Tag ID to filter posts by associated tag.
-   **Response:**
    -   Returns a list of posts with applied filters and pagination.

### 2. **Create Post**

-   **URL:** `/api/posts`
-   **Method:** `POST`
-   **Body:**
    ```json
    {
    	"title": "Post Title",
    	"description": "Post Description",
    	"tags": ["tagId1", "tagId2"],
    	"image": "file_path"
    }
    ```
-   **Response:**
    -   Returns the created post.

## Postman Collection

-   The Postman collection includes examples for each API and can be found [here](#).

## Deployment

-   Deploy the solution to a production environment (e.g., Heroku, AWS).

## Code Quality

-   Ensure the code follows industry best practices and is maintainable.

## Contributing

-   Contributions are welcome! Please fork the repository and submit a pull request.

## License

-   This project is licensed under the MIT License. See the LICENSE file for details.
