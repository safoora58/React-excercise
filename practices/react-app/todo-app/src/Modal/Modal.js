import React from 'react'
import './Modal.css'
import propTypes from 'prop-types'

//prop in function component
// export default function Modal({children}) {
//   return (
//     <div>
//       <div className="cd-popup is-visible" role="alert">
//         <div className="cd-popup-container">
//            {children}
//             <a className='cd-popup-close img-replace'>Close</a>
//         </div>
//       </div>
//     </div>
//   )
// }

//prop in class component
export default class Modal extends React.Component {
    render() {
        return (
            <div>
                <div className="cd-popup is-visible" role="alert">
                    <div className="cd-popup-container">
                        {this.props.children}
                        <a className='cd-popup-close img-replace'>Close</a>
                    </div>
                </div>
            </div>
        )
    }
}

Modal.propTypes = {
    message : propTypes.number
}