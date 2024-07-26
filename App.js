import logo from './logo.svg';
import './App.css';
import{header} from './header';
import{navbar} from './navbar';
import{searchbar} from './searchbar';
import {jobcard} from './jobcard';
import {jobData} from './jobDummyData';
import { useEffect, useState } from 'react';
import{collection,query,where,orderBy,getDocs} from "firebase/firestone";
import {db} from '.firebase.config';
function App() {
  const [jobs, setJobs] = useState([]);

  const fetchJobs = async(jobCreteria) =>{
    const tempJobs =[]
    const jobsRef = query(collection(db,'jobs'));
    const q =query(jobsRef,where("type","==",jobCreteria.type).where("title","==",jobCreteria.title),where("experience","==",jobCreteria.experience),where("location","==",jobCreteria.location) ,orderBy('postedOn','docs'));
    const querySnapshot = await getDocs(q);
    querySnapshot.foreach((doc) => {
      console.log(doc.id,'=>',doc.data());
      tempJobs.push({
        ...job.data(),
        id: job.id,
        postedOn:job.data().postedOn.toDate()
      })
    });
    setJobs(tempJobs);
  }
  useEffect(() =>{
    fetchJobs()
  },[])
  return (
    <div className='main'>
      <header/>
      <navbar/>
      <searchbar fetchJobsCustom={fetchJobsCustom}/>-
      {customSearch &&
      <button onClick = {fetchJobs} className='flex pl-[1250px] mb-2'>
        <p className='bg-blue-500 px-10 py-20 rounded-ed text-white'>clear filter</p></button>}
      {
        jobs.map((job.id) = (
          <jobcard key={job.id } {...job}/>
        )
        )
      }
    
      
    </div>
  );
}

export default App;
