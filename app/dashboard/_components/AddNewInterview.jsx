"use client";
import { useState,useEffect} from "react";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
} from "../../../components/ui/dialog";
import { Button } from "../../../components/ui/button";

const AddNewInterview = () => {
  const [openDialog, setOpenDialog] = useState(false);
  const [jobPosition,setJobPosition] = useState("")
  const [jobDesc,setJobDesc] = useState("")
  const [jobExperience,setJobExperience] = useState("")

useEffect(()=>{
  console.log(openDialog)
},[openDialog])


 const onSubmit = (e) =>{
    e.preventDefault();
    console.log(jobPosition,jobDesc,jobExperience)
    
 }
  const handleOpenDialog = () => {
  
    setOpenDialog(true);
  };

  const handleCloseDialog = () => {
    setOpenDialog(false);
     // Reset form fields on close
     setJobPosition("");
     setJobDesc("");
     setJobExperience("");
  };

  return (
    <div>
      <div
        className="p-10 border rounded-lg hover:shadow-md 
           bg-secondary hover:scale-105 cursor-pointer transition-all
           "
        onClick={handleOpenDialog}
      >
        <h2 className="text-lg text-center"> + Add New</h2>
        <Dialog open={openDialog}>
          <DialogContent className="max-w-2xl ">
            <DialogHeader>
              <DialogTitle className="text-2xl text-primary ">
                Tell me more about your Interview
              </DialogTitle>
              <div className="text-gray-600">
                <form onSubmit={onSubmit}>
                  <label className="text-lg mb-4">
                    Tell me more about your job postion and your experience.
                  </label>
                  <div className="flex gap-2 flex-col mb-4">
                    <label className=" text-lg">Job Role/Position</label>
                    <input
                      className="outline-none border p-2 rounded"
                      placeholder="Ex. Full Stack Developer"
                      type="text"
                      required
                    />
                  </div>

                  <div className="flex gap-2 flex-col mb-4">
                    <label className="text-lg">Job Description/Position</label>
                    <textarea
                      rows={5}
                      className="outline-none border p-2 rounded"
                      placeholder="Ex. Full Stack Developer"
                      type="text"
                      required
                    />
                  </div>

                  <div className="flex gap-2 flex-col mb-4">
                    <label className="text-lg">No of Years of Experience</label>
                    <input
                      className="outline-none border p-2 rounded"
                      placeholder="Ex. Full Stack Developer"
                      type="number"
                      max="50"
                      required
                    />
                  </div>
                  <div className="flex justify-end gap-5 border-none">
                <Button
                  variant="outline"
                  className="outline-none"
                  type="button"
                  onClick={handleCloseDialog}
                >
                  Cancel
                </Button>
                <Button type="submit" className="">Start Interview</Button>
              </div>
                </form>
              </div>
              
            </DialogHeader>
          </DialogContent>
        </Dialog>
      </div>
    </div>
  );
};

export default AddNewInterview;
