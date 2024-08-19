import React, {useState} from 'react'
import { useSelector, useDispatch } from 'react-redux';
import { goUp } from '../reducer/slices/MemberSlice';
import {Toaster, toast} from 'react-hot-toast';
import { useNavigate } from 'react-router-dom';


function Update() {

  const id = useSelector((val) => val.member.upd)
  const allMem = useSelector((val) => val.member.mdata)
  const dispatch = useDispatch();
  let jub = allMem.length === 0 ? 'null' : allMem.filter(val => val.id === id);

  const [name, setName] = useState(jub[0].name);
  const [age, setAge] = useState(jub[0].age);
  const navi = useNavigate()

    // console.log(id)
    
    console.log(jub)

    function goUpdate(e){
        e.preventDefault()
        dispatch(goUp({name, age}))

        toast('Member Updated!', {
            icon: '👏',
          });

        setTimeout(() => {
            navi('/')
        }, 2000);

        // setName('')
        // setAge('')
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
        Update Member
      </h1>

      <div className="lg:w-full lg:flex-col lg:flex lg:items-center lg:justify-center lg:mt-5">
        <form onSubmit={ goUpdate} className="flex items-center flex-col gap-4 mt-12 font-['PP_Neue_Machina_Inktrap_Medium
            ">
          <input
          className="w-full text-[18px] bg-transparent font-['PP_Neue_Machina_Inktrap_Medium'] border border-[#F7F7F7] text-[#f7f7f7] py-2 px-4 rounded-full lg:w-[300px]"
            type="text"
            placeholder="Update Name"
            value={name}
            onChange={(e) => setName(e.target.value)}
            required
          />
          <input
            className="w-full text-[18px] bg-transparent font-['PP_Neue_Machina_Inktrap_Medium'] border border-[#F7F7F7] text-[#f7f7f7] py-2 px-4 rounded-full lg:w-[300px]"
            type="text"
            placeholder="Update Age"
            value={age}
            onChange={(e) => setAge(e.target.value)}
            required
          />
          <input
            className="text-[18px] w-full cursor-pointer py-2 px-4 font-['PP_Neue_Machina_Inktrap_Medium'] bg-[#f7f7f7] rounded-full text-[#040619] font-bold lg:w-[300px]"
            type="submit"
            value="Update"
            // onClick={() => addx()}
          />
        </form>
      </div>

    </div>
  )
}

export default Update
