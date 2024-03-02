import AppInfo from '../app-info/app-info';
import SearchPanel from '../search-panel/search-panel';
import AppFilter from '../app-filter/app-filter';
import EmployersList from '../employers-list/employers-list';
import './app.css';
import EmployersAddForm from '../employers-add-form/employers-add-form';



function App() {
   const data = [
      { name: "Nataliia P.",salary: 18000, increase: false},
      { name: "Alex P.",salary: 8000, increase: true},
      { name: "Ulia K.",salary: 10000, increase: false},
   ]
   return (
      <div className="app">
         <AppInfo/>

         <div className="search-panel">
           <SearchPanel/>
           <AppFilter/> 
         </div>
           <EmployersList data={data}/>
           <EmployersAddForm/>
                  
      </div>
   );
}

export default App;
