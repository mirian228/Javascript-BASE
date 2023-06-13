class Shape
{
    draw() 
    {
        return "I'm generic Shape";
    }
}

class Square extends Shape
{
    draw()
    {
        return "I'm Square";
    }
}

class Circle extends Shape
{
    draw()
    {
        return "I'm Circle";
    }
}
