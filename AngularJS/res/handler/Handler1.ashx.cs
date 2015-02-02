using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;

namespace AngularJS.res.handler
{
    /// <summary>
    /// Handler1 的摘要说明
    /// </summary>
    public class Handler1 : IHttpHandler
    {

        public void ProcessRequest(HttpContext context)
        {
            context.Response.ContentType = "text/plain";
            string name = HttpContext.Current.Request.QueryString["name"];
            string name1 = HttpContext.Current.Request.QueryString["name1"];
            name += name1;
            context.Response.Write(name);
            context.Response.End();
        }

        public bool IsReusable
        {
            get
            {
                return false;
            }
        }
    }
}