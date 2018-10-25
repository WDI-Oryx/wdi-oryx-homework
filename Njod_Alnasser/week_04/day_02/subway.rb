lines = {

    'N'=>[
            "Times Square",
            "34th",
            "28th",
            "23rd",
            "Union Square",
            " 8th"
        ],

    'L' =>[
            "8th",
            "6th",
            "Union Square",
            "3rd",
            "1st"
        ],

    '6' =>[
            "Grand Central",
            "33rd",
            "28th",
            "23rd",
            "Union Square",
            "Astor Place"
        ]

    }

    def index1(num,lines,line,stop,stop1)
        index1=lines[line].index("Union Square")
        index1=lines[line].index(stop)if num==0
        index2=lines[line].index(stop1)
        compare(num,lines,line,index1,index2)
    end
arr
 def compare(num,lines,line,index1,index2)
         Ar=lines[line][index2 .. index1] if(index1>index2)
        Ar=lines[line][index1 .. index2] if(index2>index1)
        Ar.reverse! if index2>index1&&num==1
        Ar.reverse! if index2<index1&&num==2 
        
        if num==0
            puts "You must travel through the following stops on the #{line} line"+ Ar.join(' ') 
        end  

         if num==1  
        Ar.pop  
        puts "You must travel through the following stops on the #{line} line " + Ar.join(' ') 
         end 

         if num==2 
            puts "Your journey continues through the following stops" + Ar.join(' ') 
         end  
end

