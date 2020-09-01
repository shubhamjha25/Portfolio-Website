import React from 'react';
import './JsonDoc.css';

const JsonDoc = () => {
    return(
        <div>
            <pre>
                const shubham = {`{

                    pronouns: "He" | "Him",

                    code: ["cpp", "python","javascript", "typescript"],

                    askMeAbout: ["web dev", "tech", "dsa"],

                    technologies: {

                        mobileApp: ["react-native"],

                        frontEnd: {
                            js: ["react", "next"],
                            css: ["bootstrap", "materialize", "sass"]
                        },

                        backEnd: "php",

                        databases: ["mysql"],

                        misc: ["firebase", ]
                    },

                    architecture: ["mvc", "serverless architecture", "progressive web applications", "single page applications"],

                    funFact: "There are 10 types of people. Those who can read binary & those who can't !"

                };`
                }
            </pre>
        </div>
    )
}

export default JsonDoc;