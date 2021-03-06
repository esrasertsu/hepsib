import { FC, ReactNode, useContext, useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import { observer } from 'mobx-react-lite';
import './toast.scss';
import { RootStoreContext } from 'src/app/stores/rootStore';

interface ToastProps {
  className?: string;
  toastList?:any;

}


const Toast: FC<ToastProps> = ({
  className = '',
  toastList
}) => {



    const [list, setList] = useState(toastList);

    useEffect(() => {
        setList([...toastList]);
    }, [toastList]);

    const deleteToast = id => {
        const listItemIndex = list.findIndex(e => e.id === id);
        const toastListItem = toastList.findIndex(e => e.id === id);
        list.splice(listItemIndex, 1);
        toastList.splice(toastListItem, 1);
        setList([...list]);
    }

  
    useEffect(() => {
        const interval = setInterval(() => {
            if (toastList.length && list.length) {
                deleteToast(toastList[0].id);
            }
        }, 3000);
        
        return () => {
            clearInterval(interval);
        }
    }, [toastList, list]);
 

  return (
    list.map((toast, i) => 
    <div className={`notification-container top-center ` + className}>
                {
                        <div key={i}
                            className={`notification toast top-center`}
                            style={{ backgroundColor: toast.backgroundColor }}
                        >
                            <button onClick={() => deleteToast(toast.id)}>
                                X
                            </button>
                            <div>
                                <p className="notification-message">
                                    {toast.description}
                                </p>
                            </div>
                        </div>
                }
            </div>
            
    )
  );
};


export default observer(Toast);