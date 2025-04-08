export async function getOverviewData() {
    try {
      const res = await fetch("https://67f55317913986b16fa42b44.mockapi.io/overview");
      const json = await res.json();
      return json[0]; 
    } catch (err) {
      console.error("Lỗi lấy dữ liệu tổng quan:", err);
      return null;
    }
  }
  