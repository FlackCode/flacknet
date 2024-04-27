import resumeIMG from '../image/resume.png'
import shopIMG from '../image/shop.png'
import personalIMG from '../image/personalpage.png'

const ProjectArray = [
    {
        id: 1,
        image: personalIMG,
        projectName: 'Personal Page',
        description: 'My personal page where i will be keeping track of my new projects and adding more information about me as time goes by. Also the page you are currently viewing!',
    },
    {
        id: 2,
        image: resumeIMG,
        projectName: 'Resume Builder',
        description: 'A small project i have worked on to showcase my React and Tailwind knowledge. A fully functional CV Maker, with the ability of downloading the document that youve made.',
    },
    {
        id: 3,
        image: shopIMG,
        projectName: 'Shopping Page',
        description: 'Another small project ive worked on to showcase my progress and knowledge. Learned context-api and implemented full shopping cart functionality. Planning to rework the website in the future for a cleaner and more professional look as currently the only good thing about it is its functional.',
    },
]

export default ProjectArray;