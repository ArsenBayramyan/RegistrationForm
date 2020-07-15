using System;
using System.Net;
using System.Net.Mail;
using Microsoft.AspNetCore.Mvc;
using RegistrationForm.Models;

namespace RegistrationForm.Controllers
{
    public class HomeController : Controller
    {
       
        [HttpGet]
        public ViewResult Registration() => View();

        [HttpGet]
        public IActionResult Success() => View();

        [HttpPost]
        public IActionResult SignUp(StudentCreateModel createStudent)
        {
            if (ModelState.IsValid)
            {
                return RedirectToAction("SendEmail",new StudentCreateModel { FullName=createStudent.FullName,Age=createStudent.Age,
                                                                            Phone=createStudent.Phone,Email=createStudent.Email});
            }
            return View(createStudent);
        }
        public IActionResult SignUp() => View();

        public IActionResult SendEmail(StudentCreateModel student)
        {
            try
            {
                if (ModelState.IsValid)
                {
                    var senderEmail = new MailAddress("arsen1997b@mail.ru", "Arsen");
                    var receiverEmail = new MailAddress("Fullstackdotnet.hm@gmail.com", "Receiver");
                    var password = "chemasi.1997";
                    var subject="Full Stack .Net";
                    var message=$"Full Name - {student.FullName}" + Environment.NewLine+
                                $"Age - {student.Age}" + Environment.NewLine+
                                $"Phone - {student.Phone}" + Environment.NewLine+
                                $"Email - {student.Email}";
                    var smtp = new SmtpClient
                    {

                        Host = "smtp.mail.ru",
                        Port = 587,
                        EnableSsl = true,
                        DeliveryMethod = SmtpDeliveryMethod.Network,
                        UseDefaultCredentials = false,
                        Credentials = new NetworkCredential(senderEmail.Address, password)
                    };
                    using (var mess = new MailMessage(senderEmail, receiverEmail)
                    {
                        Subject = subject,
                        Body = message
                    })
                    {
                        smtp.Send(mess);
                    }
                    return RedirectToAction(nameof(Success));
                }
            }
            catch (Exception ex)
            {
                ViewBag.Error = ex.Message;
            }
            return View();
        }

    }
}
