import css from './NotFoundPage.module.css';

export default function NotFoundPage() {
    return (
       <div className={css.container}>
          <strong className={css.message}>404... Page not found...</strong>
      </div>
    )
}