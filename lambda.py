import json
import boto3

def lambda_handler(event, context):
    try:
        client = boto3.resource('dynamodb')
        table = client.Table("SenaiFeedback")
        print(table.table_status)
        table.put_item(Item= {'comentario': event['queryStringParameters']['comentario'],'stars':  event['queryStringParameters']['stars']})
        return {
            "statusCode": 200,
            "headers": {
                "Access-Control-Allow-Headers" : "Content-Type",
                "Access-Control-Allow-Origin": "*",
                "Access-Control-Allow-Methods": "OPTIONS,POST,GET"
            },
            "body": json.dumps({
                'status': 200,
                'message': 'Feedback registrado.'
            })
        }
    except:
        return {
            "statusCode": 200,
            "headers": {
                "Access-Control-Allow-Headers" : "Content-Type",
                "Access-Control-Allow-Origin": "*",
                "Access-Control-Allow-Methods": "OPTIONS,POST,GET"
            },
            "body": json.dumps({
                'status': 100,
                'message': 'Erro ao registrar o feedback.'
            })
        }