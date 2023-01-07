resource "aws_subnet" "private" {
    vpc_id = aws_vpc.main.id
    cidr_block = "10.0.0.0/24"

    tags = {
        Names = "private_subnet"
    } 
}