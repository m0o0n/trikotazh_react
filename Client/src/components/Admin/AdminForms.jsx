import React, { Component } from 'react';
import DropZone from 'react-dropzone';
import { MdCloudUpload } from 'react-icons/md';
import s from './Admin.module.scss';
import { Form, Field, reduxForm } from 'redux-form';

const CreateTypeForm = props => {
  return (
    <form onSubmit={props.handleSubmit} className={s.type_form}>
      <div className={s.group}>
        <label>Введите имя типа:</label>
        <Field name="name" component="input" placeholder="name of type" />
      </div>
      <div className={s.group}>
        <label>Выберете раздел для типа:</label>
        <Field name="subtype" component="select">
          {props.state.SubTypes.Subtypes.map(el => {
            return (
              <option key={el.id} value={el.id}>
                {el.name}
              </option>
            );
          })}
        </Field>
      </div>
      <button>Create Type</button>

      <div>{props.error}</div>
    </form>
  );
};

const CreateBrandForm = props => {
  return (
    <form onSubmit={props.handleSubmit} className={s.brand_form}>
      <div className={s.group}>
        <label>Введите имя бренда/Страну производитель</label>
        <Field name="name" component="input" placeholder="name of brand" />
      </div>
      <button>Create Band</button>

      <div>{props.error}</div>
    </form>
  );
};

class CreateProductForm extends Component {
  constructor() {
    super();
    this.state = {
      imageFile: [],
      info: [],
    };
  }

  addInfo = () => {
    this.setState({
      info: [
        ...this.state.info,
        { title: '', description: '', number: Date.now() },
      ],
    });
  };
  removeInfo = number => {
    this.setState({ info: this.state.info.filter(i => i.number !== number) });
  };
  handleFormSubmit = formProps => {
    const fd = new FormData();
    fd.append('imageFile', formProps.imageToUpload.file);
  };

  handleOnDrop = (newImageFile, onChange) => {
    const imageFile = {
      file: newImageFile[0],
      name: newImageFile[0].name,
      preview: URL.createObjectURL(newImageFile[0]),
      size: newImageFile[0].size,
    };
    this.setState({ imageFile: [imageFile] }, () => onChange(imageFile));
    console.log(this.state);
  };
  resetForm = () => this.setState({ imageFile: [] }, () => this.props.reset());
  render = () => (
    <Form
      className={s.product_form}
      onSubmit={this.props.handleSubmit(this.handleFormSubmit)}
    >
      <div className={s.DropZone}>
        <Field
          name="imageToUpload"
          component={DropZoneField}
          type="file"
          imagefile={this.state.imageFile}
          handleOnDrop={this.handleOnDrop}
        />
        <button
          type="button"
          className="uk-button uk-button-default uk-button-large clear"
          disabled={this.props.pristine || this.props.submitting}
          onClick={this.resetForm}
          style={{ float: 'right' }}
        >
          Clear
        </button>
      </div>
      <div className={s.group}>
        <label>Введите имя товара</label>
        <Field name="name" component="input" placeholder="name of product" />
      </div>
      <div className={s.group}>
        <label>Выберете тип товара</label>
        <Field name="type" component="select">
          {this.props.state.Types.Types.map(el => {
            return (
              <option key={el.id} value={el.id}>
                {el.name}
              </option>
            );
          })}
        </Field>
      </div>
      <div className={s.group}>
        <label>Введите цену за 1 метр</label>
        <Field name="cost1" component="input" placeholder="cost for 1m" />
      </div>
      <div className={s.group}>
        <label>Введите цену за 10 метров</label>
        <Field name="cost10" component="input" placeholder="cost for 10m" />
      </div>
      <div className={s.group}>
        <label>Введите цену за 50 метров</label>
        <Field name="cost50" component="input" placeholder="cost for 50m" />
      </div>
      <div className={s.button} onClick={this.addInfo}>
        Add field
      </div>
      <div className={s.add_properies}>
        {this.state.info.map((el, i) => {
          return (
            <div key={i}>
              <Field
                name={`new_param_title${i}`}
                placeholder="title"
                component="input"
              />
              <Field
                name={`new_param_description${i}`}
                placeholder="description"
                component="input"
              />
              <div
                className={s.button}
                onClick={() => this.removeInfo(el.number)}
              >
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512">
                  <path d="M135.2 17.7L128 32H32C14.3 32 0 46.3 0 64S14.3 96 32 96H416c17.7 0 32-14.3 32-32s-14.3-32-32-32H320l-7.2-14.3C307.4 6.8 296.3 0 284.2 0H163.8c-12.1 0-23.2 6.8-28.6 17.7zM416 128H32L53.2 467c1.6 25.3 22.6 45 47.9 45H346.9c25.3 0 46.3-19.7 47.9-45L416 128z" />
                </svg>
              </div>
            </div>
          );
        })}
      </div>

      <button
        type="submit"
        className="uk-button uk-button-primary uk-button-large submit"
        disabled={this.props.submitting}
      >
        Create Product
      </button>
    </Form>
  );
}

const DropZoneField = ({
  handleOnDrop,
  input: { onChange },
  imagefile,
  meta: { error, touched },
}) => (
  <DropZone
    accept="image/jpeg, image/png, image/gif, image/bmp"
    className="upload-container"
    onDrop={file => handleOnDrop(file, onChange)}
    multiple={false}
  >
    {props =>
      imagefile && imagefile.length > 0 ? (
        <ImagePreview imagefile={imagefile} />
      ) : (
        <Placeholder {...props} error={error} touched={touched} />
      )
    }
  </DropZone>
);

const ImagePreview = ({ imagefile }) =>
  imagefile.map(({ name, preview, size }) => (
    <div key={name} className={s.render_preview}>
      <div className={s.image_container}>
        <img src={preview} alt={name} />
      </div>
      <div className="details">
        {name} - {(size / 1024000).toFixed(2)}MB
      </div>
    </div>
  ));

const Placeholder = ({ getInputProps, getRootProps, error, touched }) => (
  <div
    {...getRootProps()}
    className={`placeholder-preview ${error && touched ? 'has-error' : ''}`}
  >
    <input {...getInputProps()} />
    <MdCloudUpload style={{ fontSize: 100, paddingTop: 85 }} />
    <p>Click or drag image file to this area to upload.</p>
  </div>
);

export const CreateProductReduxForm = reduxForm({
  // a unique name for the form
  form: 'product',
})(CreateProductForm);

export const CreateBrandReduxForm = reduxForm({
  // a unique name for the form
  form: 'brand',
})(CreateBrandForm);

export const CreateTypeReduxForm = reduxForm({
  // a unique name for the form
  form: 'type',
})(CreateTypeForm);
