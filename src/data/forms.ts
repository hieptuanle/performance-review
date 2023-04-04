import _ from "lodash";

export const forms = [
  {
    code: "",
    displayName: "",
    department: "",
    position: "",
    email: "",
    pic: "",
    group: 1,
    reviewerCode1: "",
    reviewerName1: "",
    reviewerCode2: "",
    reviewerName2: "",
    reviewerCode3: "",
    reviewerName3: "",
    reviewerCode4: "",
    reviewerName4: "",
    reviewerCode5: "",
    reviewerName5: "",
    managerCode: "",
    managerName: "",
  },
];

export const managers = _.map(
  _.reduce<any, any>(
    forms,
    (result, form) => {
      if (form.managerCode) {
        result[form.managerCode] = result[form.managerCode] || {
          code: form.managerCode,
          displayName: form.managerName,
          reviewees: [],
        };
        result[form.managerCode].reviewees.push(form);
      }
      return result;
    },
    {}
  )
);
