import React, { useState } from 'react'
import { useFormik } from 'formik';
import axios from "axios"
import {Button, Container, FormGroup, FormText, Input, Label} from "reactstrap"
import { baseUrl } from '../../store/baseUrl'
import moment from "moment"
// //////////////////////moment
import { trLocale } from '../../moment/locale/tr';

moment.updateLocale('tr', trLocale);

//do whatever


////////////////////////

const emailRegex=/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i
  

// 1970den beri olan saniyeler newDateden alir moment//
// const oldDate=moment().valueOf()

// const oldDate=1706069197077
// const agoDate=moment(oldDate).fromNow()
// console.log("agoDate",agoDate);



// console.log("oldDate",oldDate);
const validate=(values)=>{
  console.log("for errorsmsg",values);
  
  let errors={}
  if(!values.name){
    errors.name="ad yoxdur"
  }
  else if(values.name.length<3){
  
    errors.name="ad qisadir"
  }else if(values.name.length>15){
    errors.name="ad cox uzundur"
  }
  
  if(!values.address){
    errors.address="adres yoxdur"
  }
  else if(values.address.length<3){
  
    errors.address="adres qisadir"
  }else if(values.address.length>15){
    errors.address="adres cox uzundur"
  }
  
  if(!values.phone){
    errors.phone="telefon yoxdur"
  }
  
  if(!values.email){
    errors.email="email yoxdur"
  } else if(!emailRegex.test(values.email)){
    errors.email = "Not a valid email"
  }
  return errors
  }

export const Contact = () => {


  const createDate=moment().valueOf()

const [loading,setLoading]=useState(false)
  const dateMoment=moment().format()
console.log("moment",dateMoment);
  

const formik=useFormik({
  initialValues:{name:"",
phone:"",
email:"",
address:""},
validate,
onSubmit:(values)=>{console.log("values",values);
addFetchData(values)
}
})
const addFetchData=(form)=>{
  setLoading(true)
  form.create_at=createDate
  axios.post(baseUrl,form).then(()=>{
    console.log("added form");

    // tostmesajiburda
    formik.handleReset()

  }).catch((err)=>{
    console.log("err",err);
  }).finally(()=>{
    setLoading(false)
  })
  
  }


console.log("formik",formik);
const disableBtn=!!Object.values(formik.errors).length



  return (
   
  <div>
<Container >
  <h2>contact us</h2>
<form className=' mx-auto w-50' action="" onSubmit={formik.handleSubmit}>
<FormGroup  className='d-flex flex-column  align-items-start'>
  <Label>name</Label>
  <Input name='name' value={formik.values.name} onChange={formik.handleChange}/>
  {formik.errors.name && ( <FormText color='danger'>{formik.errors.name}</FormText>)}

  <Label>email</Label>
  <Input name='email'value={formik.values.email} onChange={formik.handleChange}/>
  {formik.errors.email&& ( <FormText color='danger'>{formik.errors.email}</FormText>)}

  <Label>address</Label>
  <Input name='address' value={formik.values.address} onChange={formik.handleChange}  />
  {formik.errors.address && ( <FormText color='danger'>{formik.errors.address}</FormText>)}

  <Label>phone</Label>
  <Input name='phone' value={formik.values.phone} onChange={formik.handleChange}/>
  
  {formik.errors.phone && ( <FormText color='danger'>{formik.errors.phone}</FormText>)}
  {/* <FormText color='danger'>Test</FormText> */}
  <Button disabled={disableBtn || loading}
   type='submit' block

    color='danger'>{loading ? "loading" :"send"}</Button>
</FormGroup>
</form>

</Container>
  </div>
  )
}

