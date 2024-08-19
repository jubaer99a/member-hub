import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import {useDispatch, useSelector} from 'react-redux';
import { addMem, delMem, updclk } from "./reducer/slices/MemberSlice";
import { nanoid } from "@reduxjs/toolkit";
import { useNavigate } from "react-router-dom";
import {Toaster, toast} from 'react-hot-toast'


function App() {
  const [name, setName] = useState("");
  const [age, setAge] = useState("");
  const navi = useNavigate()
  const dispatch = useDispatch();
  const allMem = useSelector((val) => val.member.mdata)
 
 
  console.log(allMem)
  

  function addx(e){
    e.preventDefault()
    dispatch(addMem({id: nanoid(), name, age}))

    toast('Member Added!', {
      icon: '👏',
    });

    setName('')
    setAge('')
  
  }

  function updx(id){
    dispatch(updclk({id: id}))
    navi('/update')
  }

  function delx(id){
    dispatch(delMem({id: id}))

    toast.success('Successfully deleted!')
  }



  return (
    <div className="w-full min-h-screen py-6 px-5 lg:px-[10%]">
            <Toaster
        position="top-center"
        reverseOrder={false}
      />
      <h1
        className={`text-[26px] font-bold text-center font-["PP_Neue_Machina_Inktrap_Medium"] text-[#f7f7f7]
          lg:text-[34px] antialiased`}
      >
        Member List
      </h1>

      <div className="lg:w-full lg:flex lg:items-center lg:justify-center lg:mt-5">
        <form onSubmit={addx} className="flex items-center flex-col gap-4 mt-12 font-['PP_Neue_Machina_Inktrap_Medium
            lg:flex-row">
          <input
          className="w-full text-[18px] capitalize bg-transparent font-['PP_Neue_Machina_Inktrap_Medium'] border border-[#F7F7F7] text-[#f7f7f7] py-2 px-4 rounded-full lg:w-[300px]"
            type="text"
            placeholder="Enter Name"
            value={name}
            onChange={(e) => setName(e.target.value)}
            required
          />
          <input
            className="w-full text-[18px] bg-transparent font-['PP_Neue_Machina_Inktrap_Medium'] border border-[#F7F7F7] text-[#f7f7f7] py-2 px-4 rounded-full lg:w-[300px]"
            type="text"
            placeholder="Enter Age"
            value={age}
            onChange={(e) => setAge(e.target.value)}
            required
          />
          <input
            className="text-[18px] w-full cursor-pointer py-2 px-4 font-['PP_Neue_Machina_Inktrap_Medium'] bg-[#f7f7f7] rounded-full text-[#040619] font-bold lg:w-fit"
            type="submit"
            value="Add"
            // onClick={() => addx()}
          />
        </form>
      </div>

      

     <div className="w-full flex items-center justify-center">

     {allMem.length === 0 ? <div className="mt-24">
        <h2 className="text-[20px] text-[#f7f7f7] text-center font-['PP_Neue_Machina_Inktrap_Medium'] ">No Member Founds</h2>
      </div> :   <table
        
        className="w-full text-[#f7f7f7] font-['PP_Neue_Machina_Inktrap_Medium']  text-[16px] border-collapse mt-16
            lg:w-[550px] lg:mt-24"
      >
        <thead>
          <tr className="font-bold border-b border-[#f7f7f798]">
            <td className="text-[18px] lg:text-[22px] p-2">Name</td>
            <td className="text-[18px] lg:text-[22px] text-center p-2">Age</td>
            <td className="text-[18px] lg:text-[22px] p-2 text-end">Action</td>
          </tr>
        </thead>

        <tbody className="">

          {allMem.map(meme => {
            return <tr className="text-[16px] lg:text-[18px]">
                    <td  className="p-2 capitalize">{meme.name}</td>
                    <td  className="p-2 text-center">{meme.age}</td>
                    <td className="p-2 flex float-right gap-2">
                    <i onClick={() => updx(meme.id)}  className="ri-settings-4-fill cursor-pointer text-[#00F0FF] text-[20px]"></i>
                      <i onClick={() => delx(meme.id)} className="ri-delete-bin-5-fill text-[#FF1212] text-[20px] cursor-pointer  "></i></td>
                  </tr>
          })}
          

          
       
          

          
        </tbody>
      </table>}
     </div>

    
    </div>
  );
}

export default App;
