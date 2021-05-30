const TENANTGUID = '7b423d87-9ef7-4ac1-9d46-51e89d6891d3'
export const REQUESTS = {
  getTasks: `http://intravision-task.test01.intravision.ru/odata/tasks?tenantguid=${TENANTGUID}`,
  getStatuses: `http://intravision-task.test01.intravision.ru/api/${TENANTGUID}/Statuses`,
  getExecutors: `http://intravision-task.test01.intravision.ru/api/${TENANTGUID}/Users`,
  create: `http://intravision-task.test01.intravision.ru/api/${TENANTGUID}/Tasks`,
  getOne: (id) => {
    return `http://intravision-task.test01.intravision.ru/api/${TENANTGUID}/Tasks/${id}`
  },
  editTask: `http://intravision-task.test01.intravision.ru/api/${TENANTGUID}/Tasks`
}
