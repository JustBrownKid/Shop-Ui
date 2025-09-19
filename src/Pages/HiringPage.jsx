import PostCard from '../components/ui/PostCard.jsx';
import { useState } from "react";
import HiringItem from '../components/ui/HiringItem.jsx';

function HiringPage() {
    const hiringPosts = [
    {
      label: "Frontend Developer",
      sections: [
        {
          title: "Job Description",
          content: "We are hiring for the position of Frontend Developer. The ideal candidate should have experience with React, JavaScript, and CSS. Responsibilities include developing user interfaces, collaborating with designers, and optimizing web applications for performance."
        },
        {
          title: "Job Description",
          content: "If you are passionate about creating seamless user experiences and have a strong portfolio, we would love to hear from you. Join our dynamic team and contribute to exciting projects in a fast-paced environment."
        },
        {
          title: "Requirement",
          content: [
            "Experience with React.js",
            "Proficiency in JavaScript ES6+",
            "Strong understanding of CSS and responsive design principles",
            "A solid grasp of web performance optimization techniques"
          ]
        },
        {
          title: "CV ဖောင်၊ ဓါတ်ပုံ နှင့် အခြားလုပ်လျှောက်စာရွက်စာတမ်းများကို Viber မှ ပို့ပေးပါရန် 09788889337",
        }
      ],
    },
    {
      label: "UI/UX Designer",
      sections: [
        {
          title: "Role and Responsibilities",
          content: "We are seeking a talented UI/UX Designer to create intuitive and visually appealing user interfaces. You will be responsible for the entire design process, from wireframing and prototyping to high-fidelity mockups. Collaboration with developers and product managers is essential to ensure a seamless user experience."
        },
        {
          title: "Requirements",
          content: [
            "Proven experience as a UI/UX Designer or similar role.",
            "Proficiency with design and prototyping tools like Figma, Sketch, or Adobe XD.",
            "A strong portfolio showcasing your design skills and process.",
            "Excellent communication and collaboration skills."
          ]
        }
      ]
    },
    {
      label: "Senior Backend Engineer",
      sections: [
        {
          title: "About the Role",
          content: "We are looking for an experienced Senior Backend Engineer to join our team. You will be responsible for designing, developing, and maintaining the server-side logic and databases that power our applications. A strong understanding of scalable architecture and performance optimization is a must."
        },
        {
          title: "Key Skills",
          content: [
            "Extensive experience with Node.js, Python, or Go.",
            "Deep knowledge of relational and non-relational databases (e.g., PostgreSQL, MongoDB).",
            "Experience with cloud services (AWS, Google Cloud, Azure).",
            "Strong problem-solving and debugging skills."
          ]
        }
      ]
    }
  ];

  return (
    <div className="flex items-center justify-center min-h-screen p-4 bg-gray-100 font-sans">
      <div className="w-full max-w-xl mx-auto space-y-4">
        <h1 className="text-3xl w-full font-bold text-center text-gray-800 mb-6">Hiring Opportunities</h1>
        {hiringPosts.map((post, index) => (
          <HiringItem key={index} label={post.label} sections={post.sections} />
        ))}
      </div>
    </div>
  );
}

export default HiringPage;
