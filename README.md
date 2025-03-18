# NodeJs Heartcore Content Migration

### To run this code
At the root of the folder, perform the following steps:
1. Run this command to install node modules: `npm i`
2. Run this command to compile the code: `npx tsc index.ts`
3. Run this command to execute the code: `node index.js`


### Description of task


1. Create a Heartcore project
2. Create Two languages English(US) & Danish(Denmark)
3. Create the following structure in the project

- Create two folders 📁
   - **Elements**
   - **pages**
- In the **Elements folder 📂** create an **Element type ⚛️** called **Genre** and create two properties:
   - **Index number(Textstring, Mandatory)**
   - **Title(Textstring, Vary by culture)**
- In the **Pages 📁** folder create two **Document Types**:
   - **TV Show**
   - **TV Shows**
- **TV Show** Document Type needs 3 properties:
   - **Show Summary(RTE, Vary by culture)**
   - **Show Genres(Blocklist using Element type: Genre)**
   - **Show Image(Image Media Picker)**
   - **Show Id(Label(String))**
- **TV Shows** Document Type has no properties and has the following settings:
   - List View ✔️
   - Allow as root ✔️
   - Allowed child node types: **TV Show**

- The structure ↓
   - ![image](https://github.com/user-attachments/assets/b4d17bd8-ba88-40ea-8732-592355448cb4)
4. Create a content node populated automatically using the [Heartcore Client Library](https://github.com/umbraco/Umbraco.Headless.Client.Net). If you are not using C#, use the [Heartcore API Docs](https://docs.umbraco.com/umbraco-heartcore/api-documentation/api-documentation) and the [api.tvmaze.com](https://www.tvmaze.com/api) with your prefered language.
5.  If a show exists with an ID do the following ↓
- Update Existing Property:
   - If the property already exists in Heartcore but is empty, check if TVMAZE has a value for it. If it does, update the property in Heartcore with the value from TVMAZE.
- Create New Content with Media:
   - If the property doesn't exist in Heartcore, download the images from TVMAZE, save them to the media section in Heartcore, and link them to a new content node you create.
