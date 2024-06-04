class StyledEmpTable extends EmpTable {
    constructor(employees) {
      super(employees);
    }
  
    getStyles() {
      return `<style>table { border-collapse: collapse; } th, td { border: 1px solid black; padding: 10px; }</style>`;
    }
  
    getHtml() {
      return this.getStyles() + super.getHtml();
    }
  }
  
  const styledEmpTable = new StyledEmpTable(employees);
  console.log(styledEmpTable.getHtml());