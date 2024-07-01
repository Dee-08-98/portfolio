import React, { useEffect, useState, useRef } from 'react';
import { FaPen } from 'react-icons/fa'
import { useFormik } from 'formik'
import FormValidate from '../Schemas/FormValidate';
import emailjs from '@emailjs/browser';

const initialValues = {
    Name: "",
    mail: "",
    subject: "",
    message: ""

}

function Email(props) {


    const form = useRef();

    const { errors, values, touched, handleBlur, handleChange, handleSubmit } = useFormik({
        initialValues: initialValues,
        validationSchema: FormValidate,
        onSubmit: (values, action) => {
            // console.log(values);

            // ************** Email js****************

            emailjs
                .sendForm('service_x7gglgc', 'template_5bmg428', form.current, {
                    publicKey: 'Se7yIJS2uE-70Nc0x',
                })
                .then(
                    () => {
                        console.log('SUCCESS!');
                    },
                    (error) => {
                        console.log('FAILED...', error.text);
                    },
                );

            // ************** Email js****************


            action.resetForm()
        }
    })

    // console.log(formik);
    // console.log(errors);





    return (
        <>
            <div className="bg-zinc-700 font-serif">
                <div className="">
                    <div className="  pt-8 pb-8 text-center flex justify-center items-center">
                        <div className='border-b-2 border-white w-40 '></div>
                        <h2 className='  text-3xl font-bold text-white mx-2'>Contact<span className='text-yellow-400'> US</span></h2>
                        <div className='border-b-2 border-white w-40 '></div>
                    </div>
                </div>
                <div className="flex justify-center mt-3 pb-5">
                    <div className='lg:w-[50%] md:w-[70%] w-[90%] ' >
                        <div className=" pb-4">
                            <h3 className='indent-5 font-bold  text-yellow-500 tracking-[0.4px] text-xl'>Email ME </h3>
                            {/* <span className='mx-2 font-bold  text-yellow-500 '><FaPen /></span> */}
                            <div className='border-b-2 border-dotted border-white w-40 ml-5 mt-2 '></div>
                        </div>
                        <form ref={form} className="flex flex-col bg-zinc-700 " onSubmit={handleSubmit}>


                            <input className='border-2 border-white  mt-3 indent-5 font-bold p-2 text-black '
                                name='Name'
                                type="text"
                                value={values.Name}
                                onChange={handleChange}
                                onBlur={handleBlur}
                                placeholder='Your Name' />

                            {
                                errors.Name && touched.Name ? <p className='lg:indent-2 md:indent-2 sm:indent-1 mt-1 font-bold text-red-500 font-serif'>{errors.Name}</p> : null
                            }

                            <input className='border-2 border-white mt-3 indent-5 font-bold p-2 text-black '
                                name='mail'
                                type="email"
                                value={values.mail}
                                onChange={handleChange}
                                onBlur={handleBlur}
                                placeholder='Your Email ' />

                            {
                                errors.mail && touched.mail ? <p className='lg:indent-2 md:indent-2 sm:indent-1 mt-1 font-bold text-red-500 font-serif'>{errors.mail}</p> : null
                            }

                            <input className='border-2 border-white mt-3 indent-5 font-bold p-2 text-black '
                                name='subject'
                                type="text"
                                value={values.subject}
                                onChange={handleChange}
                                onBlur={handleBlur}
                                placeholder='Subject' />


                            {
                                errors.subject && touched.subject ? <p className=' lg:indent-2 md:indent-2 sm:indent-1 mt-1 font-bold text-red-500 font-serif'>{errors.subject}</p> : null
                            }

                            <textarea className='border-2 border-white mt-3 indent-5 font-bold p-2 text-black '
                                name='message'
                                value={values.message}
                                onChange={handleChange}
                                onBlur={handleBlur}
                                rows={4}
                                placeholder='Message' />


                            {
                                errors.message && touched.message ? <p className=' lg:indent-2 md:indent-2 sm:indent-1 mt-1 font-bold text-red-500 font-serif'>{errors.message}</p> : null
                            }

                            <button className='p-2 mt-3 mb-5 bg-red-500 font-bold ' type='submit'> Send Mail </button>
                        </form>

                    </div>

                </div>
            </div>
        </>
    );
}

export default Email;