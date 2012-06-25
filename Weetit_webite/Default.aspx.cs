﻿using System;
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
        public static string getQuestionType(string data)
        {
            QuestionClassifier classifier = new QuestionClassifier(data);
            List<string> tempList = classifier.getObjects();
            string returnData="";
            returnData += "{\"type\":\"" + classifier.ipType.ToString() + "\",\"data\":";
            if (tempList.Count == 1)
            {
                returnData += "\"" + tempList[0] + "\"}";
            }
            else
            {
                returnData += "[";

                for (int i = 0 ; i < tempList.Count ; i++)
                {
                    if (i < tempList.Count - 1)
                    {
                        returnData += "\"" + tempList[0] + "\",";
                    }
                    else
                    {
                        returnData += "\"" + tempList[0] + "\"]}";
                    }
                }
            }
            
            return returnData;
        }
    }
}
