import React from 'react'
import { Button, Image, Modal } from 'react-bootstrap'
import "./index.css"
import { useState } from 'react'
export const ShowRequest = () => {
  const [showImg, setShowImg] = useState(false)
  const [imgSrc, setImgSrc] = useState(`${process.env.PUBLIC_URL}/icons/show.png`)
  const [acceptRequest, setAcceptRequest] = useState(false)
  const [ConfirmAcceptRequest, setConfirmAcceptRequest] = useState(false)
  const [refuseRequest, setRefuseRequest] = useState(false)
  const [confirmRefuseRequest, setConfirmRefuseRequest] = useState(false)


  const handleAcceptRequest = () => {
    setConfirmAcceptRequest(true)


    // after check accept request 
    setAcceptRequest(false)




  }
  const handleRefuseRequest = () => {


  }







  return (
    <div className='showRequest p-2'>
      {showImg &&
        <Modal
          size="lg"
          show={showImg}
          onHide={() => setShowImg(false)}
          aria-labelledby="example-modal-sizes-title-lg"
          className='systemModal '
        >
          <Image className='pointer w-100 h-100  instrutmentimg' src={imgSrc} alt='owner img' />
        </Modal>}

      {acceptRequest &&
        <Modal
          className='submitSystemPoper'
          size="lg"
          aria-labelledby="contained-modal-title-vcenter"
          onHide={() => setAcceptRequest(false)}
          show={acceptRequest}
        >

          <Modal.Body className='d-flex align-items-center'>


            <div className='d-flex w-75 flex-column mx-auto mt-3 justify-content-center align-items-center '>
              {<p className='text-white' style={{ fontSize: "30px" }}>  هل انت متاكد من قبول هذا الطلب </p>}
              <div className='d-flex justify-content-center mt-3 gap-3'>

                <Button

                  onClick={() => {
                    handleAcceptRequest()

                  }}
                  className='Delete-button'>نعم</Button>

                <Button

                  onClick={() => {
                    setAcceptRequest(false)

                  }}
                  className='No-Delete'>لا</Button>

              </div>

            </div>
          </Modal.Body>


        </Modal >
      }
      {ConfirmAcceptRequest &&
        <Modal
          className='submitSystemPoper'
          size="lg"
          aria-labelledby="contained-modal-title-vcenter"
          onHide={() => setConfirmAcceptRequest(false)}
          show={ConfirmAcceptRequest}
        >

          <Modal.Body >
            <div className='d-flex justify-content-center w-100'>            <img src={process.env.PUBLIC_URL + "/correct.gif"} width={120} height={120} className='my-3' color='#E1B67C' /></div>


            <div className='d-flex w-75 flex-column mx-auto mt-3 justify-content-center align-items-center '>
              {<p className='text-white' style={{ fontSize: "30px" }}> تم قبول الطلب بنجاح    </p>}
              <Button
                onClick={() => {
                  setConfirmAcceptRequest(false)

                }}
                className='sumbmitAddUpdateUser'>حفظ</Button>

            </div>
          </Modal.Body>


        </Modal >
      }




      {refuseRequest &&  <Modal
          className='submitSystemPoper'
          size="lg"
          aria-labelledby="contained-modal-title-vcenter"
          onHide={() => setRefuseRequest(false)}
          show={refuseRequest}
        >

          <Modal.Body className='d-flex align-items-center'>


            <div className='d-flex w-75 flex-column mx-auto mt-3 justify-content-center align-items-center '>
              {<p className='text-white' style={{ fontSize: "30px" }}>  هل انت متاكد من رفض هذا الطلب </p>}
              <div className='d-flex justify-content-center mt-3 gap-3'>

                <Button

                  onClick={() => {
                    handleRefuseRequest()

                  }}
                  className='Delete-button'>نعم</Button>

                <Button

                  onClick={() => {
                    setRefuseRequest(false)

                  }}
                  className='No-Delete'>لا</Button>

              </div>

            </div>
          </Modal.Body>


        </Modal > 




      }




      <div className='border-golden'>
        <div className='row px-2 py-3'>
          <div className='col-md-6 mb-2'>
            <p className='text-white'>اسم المشروع :   <span>BSA</span> </p>

          </div>
          <div className='col-md-6   mb-2'>
            <div>
              <Button className='export-bg  ms-2 '>تصدير CSV </Button>
              <Button className='export-bg ms-2'> تصدير Excel     </Button>
            </div>

          </div>
          <div className='col-md-6 mb-2'>
            <p className='text-white'>نوع المشروع :   <span>التصميم</span> </p>

          </div>
          <div className='col-md-6 mb-2'>
            <p className='text-white'>  الحالة  : <span>في انتظار الموافقة</span> </p>

          </div>
          <div className='col-md-6 mb-2'>
            <p className='text-white'>  رقم الطلب  : <span> 0123</span> </p>

          </div>

          <div className='col-md-6 mb-2'>
            <div className='d-flex gap-3'>
              <img className='pointer confirm' onClick={() => {
                setAcceptRequest(true)


              }

              } src={process.env.PUBLIC_URL + "/icons/confirm.png"} />
              <img className='pointer declince'

                onClick={() => {
                  setRefuseRequest(true)


                }}

                src={process.env.PUBLIC_URL + "/icons/declince.png"} />
              <img className='pointer editIcon' src={process.env.PUBLIC_URL + "/icons/editIcon.png"} />

            </div>

          </div>
          <div className='col-md-6 mb-2'>
            <div>

            </div>

          </div>

        </div>

      </div>
      <fieldset className='border-golden my-4'>
        <legend className='text-center'>بيانات المشروع</legend>
        <div className='row px-2'>
          <div className='col-md-6 mt-2'>
            <p className='text-white'>اسم المالك : <span>BSA</span></p>
          </div>
          <div className='col-md-6 mt-2'>
            <p className='text-white'> موقع المشروع : <span>السعودية</span></p>
          </div>
          <div className='col-md-6 mt-2'>
            <p className='text-white'> المدينة  : <span>السعودية</span></p>
          </div>
          <div className='col-md-6 mt-2'>
            <p className='text-white'> الحي  : <span>السعودية</span></p>
          </div>
          <div className='col-md-6 mt-2'>
            <p className='text-white'> رقم القطعة  : <span>___  </span></p>
          </div>
          <div className='col-md-6 mt-2'>
            <p className='text-white'> رقم المخطط   : <span>___  </span></p>
          </div>
          <div className='col-md-6 mt-2'>
            <p className='text-white'>  نوع المشروع : <span>التصميم  </span></p>
          </div>
        </div>
      </fieldset>

      <fieldset className='border-golden my-4'>
        <legend className='text-center'>بيانات المالك</legend>
        <div className='row px-2'>
          <div className='col-md-6 mt-3'>
            <p className='text-white'> نوع العميل  : <span>BSA</span></p>
          </div>
          <div className='col-md-6 mt-3'>
            <p className='text-white'>    رقم الشهادة الضربية      : <span>     ــــــــــ </span></p>
          </div>
          <div className='col-md-6 mt-3'>
            <p className='text-white'>  نوع الهوية     : <span></span></p>
          </div>
          <div className='col-md-6 mt-3'>
            <p className='text-white'> البريد الالكتروني  : <span> </span></p>
          </div>
          <div className='col-md-6 mt-3'>
            <img className='pointer instrutmentimg ' onClick={() => { setShowImg(true) }} src={imgSrc} alt='owner img' />

            <p className='text-white'>  صورة الهوية   </p>
          </div>

          <div className='col-md-6 mt-3'>
            <p className='text-white'>  رقم الجوال   : <span>  </span></p>
          </div>

        </div>
      </fieldset>
      <fieldset className='border-golden my-4'>
        <legend className='text-center'>بيانات الوكيل</legend>
        <div className='row px-2'>
          <div className='col-md-6 mt-3'>
            <p className='text-white'> نوع العميل  : <span>BSA</span></p>
          </div>
          <div className='col-md-6 mt-3'>
            <p className='text-white'>   رقم الوكالة     : <span>     ــــــــــ </span></p>
          </div>
          <div className='col-md-6 mt-3'>
            <p className='text-white'>   اسم الصك     : <span></span></p>
          </div>
          <div className='col-md-6 mt-3'>
            <p className='text-white'> رقم الصك   : <span> </span></p>
          </div>
          <div className='col-md-6 mt-3'>
            <img className='pointer instrutmentimg' onClick={() => { setShowImg(true) }} src={imgSrc} alt='owner img' />

            <p className='text-white'>  صورة الصك   </p>
          </div>

          <div className='col-md-6 mt-3'>
            <img className='pointer instrutmentimg' onClick={() => { setShowImg(true) }} src={imgSrc} alt='owner img' />

            <p className='text-white'>  صورة الصك   </p>
          </div>

        </div>
      </fieldset>



    </div>

  )
}