using System.ComponentModel.DataAnnotations;

namespace RegistrationForm.Models
{
    public class StudentCreateModel
    {
        
        [Required]
        public string FullName { get; set; }

        [Required]
        public byte Age { get; set; }

        [Required]
        public string Phone { get; set; }

        [Required]
        public string  Email { get; set; }
    }
}
