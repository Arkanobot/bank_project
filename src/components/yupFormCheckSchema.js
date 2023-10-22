import * as Yup from "yup";

const formCheckSchema = Yup.object({
  companyName: Yup.string().required("Required"),
  mailingName: Yup.string().required("Required"),
  address: Yup.string().required("Required"),
  state: Yup.string().required("Required"),
  city: Yup.string().required("Required"),
  pinCode: Yup.number().min(6).required("Required"),
  teleNo: Yup.number().min(10).required("Required"),
  mobNo: Yup.number().min(10).required("Required"),
  email: Yup.string().email().required("Required"),
  webAddr: Yup.string().required("Required"),
  gstNo: Yup.string().required("Required"),
  licenseName: Yup.string().required("Required"),
  licenseNo: Yup.string().required("Required"),
  panNo: Yup.string().min(10).required("Required"),
});

export default formCheckSchema;
