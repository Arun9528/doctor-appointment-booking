"use client"
interface FormbtnProp{
    handleClickModal:()=>void
    isSubmitting:boolean
}
export default function Submit_Cancel_Form_Btn({handleClickModal,isSubmitting}:FormbtnProp){
    return (
        <div className="flex items-center justify-end gap-x-3">
          <button
            type="button"
            onClick={handleClickModal}
            className="bg-red-600 text-white px-3 py-1.5 rounded-md text-sm cursor-pointer"
          >
            Cancel
          </button>
          <button
            type="submit"
            className="bg-sky-600 text-white px-3 py-1.5 rounded-md text-sm cursor-pointer"
          >
            {isSubmitting ? "Submitting..." : "Submit"}
          </button>
        </div>
    )
}