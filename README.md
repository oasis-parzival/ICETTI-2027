## Local Development Setup

Follow these step-by-step instructions to run the project locally on your machine:

1. **Install Node.js**: Ensure you have Node.js installed (LTS version recommended). You can download it from [nodejs.org](https://nodejs.org/).
2. **Download the Repository**: Clone or download this repository to your local machine and extract the files.
3. **Open Terminal**: Open your terminal (or Command Prompt / PowerShell) and navigate (`cd`) into the project root directory.
4. **Install Dependencies**: Run the following command to download and install all the required packages:
   ```bash
   npm install
   ```
5. **Start the Development Server**: Start the local Vite development server:
   ```bash
   npm run dev
   ```
6. **Open the Website**: Once the server starts, you will see a local URL in your terminal (typically `http://localhost:5173/` or similar). Open this link in your web browser to view the live website. Any changes you make to the source code will automatically refresh in the browser.

### Deployment
The project is optimized for deployment on platforms like Netlify or Vercel.
- Build command: `npm run build`
- Output directory: `out`
- Redirects are handled via `public/_redirects` for SPA routing.
