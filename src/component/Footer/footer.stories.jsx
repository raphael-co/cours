import React from 'react';
import Footer from './footer.jsx'

export default {
    title: 'component/Footer',
    component : 'Footer',
    argTypes: {
        backgroundColor: { control: 'color' },
      },
}

export const Normal = () => <Footer/> 




// //👇 Each story then reuses that template
// export const Primary = Template.bind({});

// Primary.args = {
//   primary: true,
//   label: 'Button',
// };


// export default {
//     title: 'component/Footer',
//     component: 'Footer',
    

// }
// const Template = (args) => <Footer {...args} />;
// export const Primary = Template.bind({})

// Primary.args={
//     primary: true,
//     label: 'Footer',
// };