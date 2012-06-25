using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using System.Web.UI;
using System.Web.UI.WebControls;
using System.Web.Services;

namespace Weetit_webite
{
    public partial class _Default : System.Web.UI.Page
    {
        protected void Page_Load(object sender, EventArgs e)
        {
            
        
        }

        [WebMethod(EnableSession = false)]
        public static int submit(string type ,string data )
        {
            //if (type.ToLower() == "q&a")
            //{
               
            //}
            //else if (type.ToLower() == "compare")
            //{

            //    HttpContext.Current.Server.Transfer("~/compare.aspx", true);    

            //}
            //else if (type.ToLower() == "relate")
            //{


            //    HttpContext.Current.Server.Transfer("~/relate.aspx", true);    
            //}

            return 32; 
        }
    }
}
