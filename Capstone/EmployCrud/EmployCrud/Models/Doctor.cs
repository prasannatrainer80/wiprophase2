namespace EmployCrud.Models
{
    public class Doctor
    {
        public int DoctorId { get;set; }
        public string DoctorName { get;set; }   
        public string Speciality {  get;set; }
        public string Qualification { get; set; } 
        public string DoctorUserName { get; set; }
        public string DoctorPassword { get; set; }
        public string Email { get; set; }
        public string Mobile { get; set; }
    }
}
