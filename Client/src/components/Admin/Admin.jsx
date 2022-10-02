import React from 'react';
import Wrapper from '../Header/Wrapper';
import s from './Admin.module.scss';
import {
  CreateBrandReduxForm,
  CreateProductReduxForm,
  CreateTypeReduxForm,
} from './AdminForms';
import { connect } from 'react-redux';

const Admin = props => {
  const onSubmitType = FormData => {
    console.log(FormData);
  };

  const onSubmitBrand = FormData => {
    console.log(FormData);
  };

  const onSubmitProduct = FormData => {
    console.log(FormData);
  };
  return (
    <div className={s.admin}>
      <Wrapper />
      <div className={s.forms}>
        <div className={s.AddType}>
          <div className={s.article}>Добавить тип</div>
          <CreateTypeReduxForm state={props.state} onSubmit={onSubmitType} />
        </div>
        <div className={s.AddBrand}>
          <div className={s.article}>Добавить бренд/страну производитель</div>
          <CreateBrandReduxForm onSubmit={onSubmitBrand} />
        </div>
        <div className={s.AddProduct}>
          <div className={s.article}>Добавить продукт</div>
          <CreateProductReduxForm
            state={props.state}
            onSubmit={onSubmitProduct}
          />
        </div>
      </div>
    </div>
  );
};
const mapStateToProps = state => {
  return {
    state: state,
  };
};

export default connect(mapStateToProps)(Admin);
