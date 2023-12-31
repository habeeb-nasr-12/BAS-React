
import "./index.css"
import DataTableComponent from '../../../DataTableComponent';
import { useContext, useState } from "react";
import ShowHolidayComponent from "../../Hr/ShowHolidayComponent/ShowHolidayComponent";
import { AddHrType } from "../../../../Context/AddHr";
import PersonalAttachments from "../PersonalAttachments/PersonalAttachments";
const Genralnformation = () => {
  const { openHr, HrType } = useContext(AddHrType)
  const [ShowHoliday, setShowHoliday] = useState(false)
  const data = Array.from({ length: 2 }).map((_, index) => {
    return {
      id: 1,
      employeeName: ' حبيب ',
      employeeCode: '1234',
      holidayType: 'حج ان شاء الله',
      holidayDate: '15-10-2024',
      display: <div className=''
        onClick={() => {

          setShowHoliday(true)
        }}
      >
        <img src={process.env.PUBLIC_URL + "/icons/view.png"} className='pointer' />
      </div>,


    }
  });
  console.log(openHr)

  const columns = [
    {
      name: 'م',
      selector: row => row.id,
    },
    {
      name: 'اسم الموظف',
      selector: row => row.employeeName,
    },
    {
      name: 'الكود الوظيفي',
      selector: row => row.employeeCode,
    },
    {
      name: 'نوع الاجازة',
      selector: row => row.holidayType,
    },
    {
      name: 'تاريخ الاجازة',
      selector: row => row.holidayDate,
    },

    {
      name: 'عرض',
      selector: row => row.display,
    },



  ];


  return (
    <div className='genralnformation overflow-y-auto p-5'>
      <ShowHolidayComponent setShowHoliday={setShowHoliday} ShowHoliday={ShowHoliday} />

      <div className=''>
        <div className='row py-1 jutify-content-between inf-square golden-square '>
          <div className='col-md-6 mb-3'><p> الاسم الاول : <span className='main-text'> اسلام </span></p> </div>
          <div className='col-md-12 mb-3 '><p> الاسم الاخير: <span className='main-text'> اسلام </span></p> </div>
          <div className='col-md-12 mb-3'><p> اسم المستخدم: <span className='main-text'> اسلام_ايهاب</span></p> </div>
          <div className='col-md-12 mb-3'><p> النوع: <span className='main-text'> ذكر</span></p> </div>
          <div className='col-md-12 mb-3'><p> البريد الالكتروني: <span className='main-text'> Islam@bsa.com</span></p> </div>
          <div className='col-md-12 mb-3'><p> رقم الجوال  : <span className='main-text'> 010123456789</span></p> </div>
          <div className='col-md-12 mb-3'><p>  تاريخ الميلاد  : <span className='main-text'> 15 - 10 -2023</span></p> </div>
          <div className='col-md-12 mb-3'><p>  النوع   : <span className='main-text'>ذكر</span></p> </div>
          <div className='col-md-6 mb-3'><p>  الكود الوظيفي   : <span className='main-text'>1235</span></p> </div>
          <div className='col-md-6 mb-3'><p>  البلد  : <span className='main-text'> مصر</span></p> </div>



        </div>
        <div className='row py-3 jutify-content-between golden-square mt-3 '>
          <div className='col-md-6 mb-3'><p> الصلاحية:  <span className='main-text'> مدير قسم </span></p> </div>
          <div className='col-md-6 mb-3 '><p>  القسم: <span className='main-text'> برمجة  </span></p> </div>
          <div className='col-md-12 mb-3'><p>بدأ العمل :   <span className='main-text'> 15  - 10 - 2023</span></p> </div>
          <div className='col-md-12 mb-3'><p> المستوي :   <span className='main-text'>خبير </span></p> </div>


        </div>
        <div className='row py-3 jutify-content-between golden-square mt-3 '>
          <p className='text-xl my-3'>
            جميع اجازات الشهر الحالي


          </p>
          <DataTableComponent className={"overflow-x-hidden w-100"} data={data} columns={columns} />


        </div>


          <PersonalAttachments />
        
        
      </div>
    </div>

  )
}

export default Genralnformation