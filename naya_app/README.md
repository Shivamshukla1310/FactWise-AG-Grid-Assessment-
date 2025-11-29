# FactWise Employee Dashboard

A professional employee management dashboard built with React and AG Grid for the FactWise Frontend Developer assessment.

![Dashboard Screenshot](./src/Screenshot%202025-11-29%20120927.png)

## 🚀 Features

- **Interactive Data Grid** - Client-side AG Grid with 20 employee records
- **Advanced Filtering** - Text, number, and date filters on all columns
- **Sorting & Resizing** - Sortable and resizable columns
- **Performance Metrics** - Real-time statistics dashboard with key metrics
- **Color-Coded Ratings** - Visual performance rating indicators
- **Pagination** - Clean pagination for better data navigation
- **Responsive Design** - Mobile-friendly layout
- **Professional Styling** - Modern, clean UI design

## 📁 Project Structure

```
src/
├── components/
│   └── DataGrid.jsx          # AG Grid component with column definitions
├── data/
│   └── SampleRows.js         # Employee dataset (20 records)
├── App.jsx                   # Main application component
└── style.css                 # Global styles and AG Grid theme
```

## 🛠️ Technologies Used

- **React** - Frontend framework
- **Vite** - Build tool and dev server
- **AG Grid Community** - Data grid component
- **CSS3** - Custom styling

## 📦 Installation

1. Clone the repository:
```bash
git clone <your-repo-url>
cd factwise-dashboard
```

2. Install dependencies:
```bash
npm install
```

3. Run the development server:
```bash
npm run dev
```

4. Open your browser and navigate to `http://localhost:5173`

## 📊 Dashboard Features

### Statistics Cards
- **Total Employees** - Count of all employees
- **Active Employees** - Count of currently active employees
- **Average Salary** - Calculated average salary across all employees
- **Average Rating** - Mean performance rating

### Data Grid Capabilities
- Multi-column sorting
- Advanced filtering (text, number, date)
- Column resizing
- Row selection
- Cell text selection
- Pagination (20 rows per page)
- Custom cell renderers for status and performance ratings

## 🎨 Key Components

### DataGrid.jsx
Contains the AG Grid configuration with:
- Column definitions for all employee fields
- Custom value formatters (salary, skills)
- Conditional cell styling for performance ratings
- Status indicators (Active/Inactive)

### SampleRows.js
Employee data structure includes:
- Personal information (name, email, age)
- Employment details (department, position, hire date)
- Performance metrics (rating, projects completed)
- Skills and manager information

## 📝 Assignment Requirements

✅ Client-side AG Grid implementation  
✅ React framework  
✅ Sample dataset with 20 rows  
✅ Clean and professional layout  
✅ Scalable and functional dashboard  
✅ Efficient data handling  

## 👨‍💻 Developer

Created for FactWise Frontend Developer Assessment

**Submission Deadline:** 5 PM, Sunday, 30th November 2025

## 📄 License

This project is created for assessment purposes.

---

**Built with ❤️ using React + AG Grid**