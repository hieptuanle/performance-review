import _ from "lodash";

export const forms = [];

export const managers = _.map(
  _.reduce<any, any>(
    forms,
    (result: any, form: any) => {
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
