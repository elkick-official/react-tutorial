import React, { useEffect, useState } from "react";
// Lecture :- 1

// Here Export default is used becuase we just want to export single component.

/**
 *  In this tutorial we will learn about React Functional component life cycle.
 *
 *  There are 3 phases in the React ComponentLifeCycle.
 *  1. Mounting Phase
 *  2. Updating Phase
 *  3. Un-Mounting Phase
 */

/**
 * 1. Mounting phase
 * During Mounting phase, a functional component is being created and added to the DOM.
 * In this phase, You typically initialise state and perform any setup that's needed when component is first loaded.
 *
 * Let's understand bit in detail what we mentioned above.
 * So. When your web application is run the components are loaded into DOM and it has been created.
 * Once the component is loaded and created you can perform the initializing the state or write a logic that you required on component load.
 * You can use "useState" state hook to intialize your state or write a custom logic that you want to on component render.
 *
 * Example:- Let suppose You want a pop-up on your screen when the home page of website is loaded.
 * You can achive this by using Mounting phase to use useState and useEffect.
 *
 * For now, I will give you a brife introduction about useState that is mention below:
 * 
 * useState:- useState is a React Hook that allows you to add state to functional components.
 * it has two return value 1st is currentStateValue and 2nd one is function for change that state value by setting up value in it.
 * useState is accept any type of datatype.
 * 
 * useEffect:- useEffect is a React Hook that allows you to perform side effects in functional components. 
   Side effects can include things like data fetching, DOM manipulation, and subscriptions.
   useEffect is used to handle these side effects in a way that's safe and synchronized with React's rendering cycle.
 */

/**
 * 2.Updating Phase
 * In the updating phase, the functional component is re-rendered due to changes in its props or state.
 * You can use the useEffect hook without an empty dependency array to achieve this behaviour.
 * or you can controll this behaviour for particular state or props by passing it in dependecy array.
 */

/**
 * 3. Unmounting Phase
 * In the unmounting phase, the functional component is being removed from the DOM.
 * The cleanup function in the useEffect hook simulates the behaviour.
 */

const ReactLifeCycle = () => {
  // START Mounting phase Example.
  const [moutingData, setMoutingData] = useState(true); // initializing state
  //   const [data, setData] = useState(true); //1.
  // Here when you write an useEffect with empty dependency that means that useEffect called at once only.
  // while component is mount or render.
  useEffect(() => {
    // What ever code is written here is called executed on component mount.
    setTimeout(() => {
      setMoutingData(false);
    }, 1000);

    // setTimeout(() => {
    //   setData(false);
    // }, 2000); // 1.
  }, []); //  "[]" this empty array inside useEffect is called dependency array.
  // END Mounting phase Example.

  // START Updating phase Example.
  /**
   * To check  this works or not open inspect element and goto the console tab and reload page. you can see that it will called couple of times
   * like when component mount when moutingData state change
   * */
  useEffect(() => {
    console.log("updating phase...........");
    console.log("moutingData ===>" + moutingData);
    // console.log("data ===>" + data); // 1.
  }); // this useEffect will called every render beacuse it hase not dependecy array. (Note: never use like this it will cause performance issues)

  /**
   * If You see console on inspect element you will see that there no defference to calling useEffect with dependency array
   * and without dependency array. but that is not true. If you are take another state do change it that will render without dependecy array
   * useEffect but it will not render "moutingData" dependency array useEffect. to check it enable "1." which is commented.
   */

  useEffect(() => {
    console.log(
      "updating phase but only when 'moutingData' has effected or changed."
    );
  }, [moutingData]); // this is controlled updating phase.

  // 1.
  //   useEffect(() => {
  //     console.log("updating phase but only when 'data' has effected or changed.");
  //   }, [data]); // this is controlled updating phase.

  // END Updating phase Example.

  // START Unmounting phase Example.
  useEffect(() => {
    // This return function syntax is called cleanup function( asked in interview )
    /**
     * Basically while component is Unmount we can make all the state in that orignal state and remove all the eventListners
     * that we have added.
     *
     * Let me add that If you don't remove eventListners while componentUnmount that will run in backgroung and consum memory
     * and again it will cause and issue of performance.
     * so it is important to remove eventListners whilw componentUnMount.
     */
    return () => {
      console.log("Unmounting phase...........");
    };
  }, []);
  // END Unmounting phase Example.

  return (
    <div>
      {moutingData ? "component mouting ....." : "useEffect Mount Success"}
    </div>
  );
};

export default ReactLifeCycle;
