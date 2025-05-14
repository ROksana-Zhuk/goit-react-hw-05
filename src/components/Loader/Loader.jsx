import  {  PropagateLoader  }  from  "react-spinners" ;
import css from './Loader.module.css';


export default function Loader() {
    const override = {
      display: 'block',
      margin: '0 auto',
    };

    return (
      <div className={css.wrapper}>
        <PropagateLoader
          color="#8b004f"
          size={25}
          cssOverride={override}
          aria-label="Loading Spinner"
          data-testid="loader"
        />
      </div>
    );
  }
