// import React, { useState } from 'react';
// import Test from './Test';
// import ListOrd from './ListOrd';


// export const ContextName = React.createContext({});

// export default function ContextTp(){
//     const [pc , setPc ] = useState([
//         { id: 1, marque: 'hp', model: 2022, ram: 8, processeur: 'proc1', prix: 4000 },
//         { id: 2, marque: 'lenovo', model: 2018, ram: 4, processeur: 'proc2', prix: 2000 },
//     ])

//     const add =(NewPc)=>{
//         setPc([...pc , NewPc])
//     }
//     const nom = 'Mehdi' ;
//     return <>
//         <ContextName.Provider value={{ nom , add , pc }}>
//             <ListOrd />
//         </ContextName.Provider>
//     </>
// }


// ContextTp.js
import React, { useState } from 'react';
import ListOrd from './ListOrd';

export const ContextName = React.createContext({});

export function ContextTp() {
    const [pc, setPc] = useState([
        { id: 1, marque: 'hp', model: 2022, ram: 8, processeur: 'proc1', prix: 4000 },
        { id: 2, marque: 'lenovo', model: 2018, ram: 4, processeur: 'proc2', prix: 2000 },
    ]);

    const add = (NewPc) => {
        setPc([...pc, NewPc]);
    }
    const nom = 'Mehdi';
    return (
        <ContextName.Provider value={{ nom, add , pc }}>
            <ListOrd />
        </ContextName.Provider>
    );
}



// UseContextPro.js
// import React from 'react';
// import Test from './Test';

// const ContextName = React.createContext({});

// export default function ContextTp() {
//     const nom = 'Mehdi';
//     return (
//         <ContextName.Provider value={{ nom }}>
//             <Test />
//         </ContextName.Provider>
//     );
// }

// export { ContextName }; // Exporting ContextName


